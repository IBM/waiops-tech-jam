---
title: "3. Impact policy language (IPL)"
sidebar_position: 3
---

The Impact Policy Language (IPL) is the scripting language used to write all Impact automation logic. Every policy in Impact is a block of IPL code that defines what happens when the policy is invoked by a service. IPL is a procedural language — code runs from top to bottom in the order it is written, with conditionals and loops controlling flow.

IPL is purpose-built for event enrichment and automation tasks. It provides direct access to event fields through the triggering event object, built-in functions for querying data sources, string manipulation, date and time handling, logging, and writing results back to the ObjectServer. It does not require knowledge of a general-purpose programming language, but familiarity with basic programming concepts such as variables, conditions, and loops is helpful.

### 3.1 IPL basics — variables, types, and assignment

#### Objective

In this section, you will be introduced to the fundamental elements of IPL: variables, data types, and assignment syntax. By the end of the section, you will understand how to declare and assign variables, what data types are available, and how to write basic IPL expressions.

#### Background

IPL variables are declared and assigned using the following syntax:

```ipl
variableName = value;
```

There is no explicit type declaration — IPL infers the type from the assigned value. The primary data types used in IPL are:

| Type | Description | Example |
|------|-------------|---------|
| String | Text value enclosed in double quotes | `"CRITICAL"` |
| Integer | Whole number | `5` |
| Float | Decimal number | `3.14` |
| Boolean | True or false value | `True` or `False` |
| Array | Ordered list of values | `[1, 2, 3]` |
| EventContainer | An object holding event field values | Retrieved from the service trigger |

Variable names are case-sensitive. A variable assigned in one part of a policy is available for the remainder of that policy's execution. Variables do not persist across separate policy invocations — each time the service triggers the policy, a fresh execution context begins.

Comments are written using the `//` prefix for single-line comments, or using `/* ... */` for block comments that span multiple lines:

```ipl
// This is a single-line comment
nodeName = "router01";   // inline comment after a statement

/*
 * This is a block comment.
 * Use it for policy headers, longer explanations,
 * or to comment out a section of code during testing.
 */
```

Block comments are commonly used at the top of a policy to describe its purpose, prerequisites, and how to run it.

#### String concatenation

Strings are concatenated using the `+` operator:

```ipl
greeting = "Hello " + "World";
fullKey = nodeValue + ":" + alertKeyValue;
```

#### Conditional logic

IPL uses `if`, `else if`, and `else` for conditional branching:

```ipl
if (severity == 5) 
{
    priority = "Critical";
} 
elseif (severity >= 3) {
    priority = "High";
} 
else 
{
    priority = "Normal";
}
```

Comparison operators available in IPL:

| Operator | Meaning |
|----------|---------|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

Logical operators:

| Operator | Meaning |
|----------|---------|
| `&&` | Logical AND |
| `\|\|` | Logical OR |
| `!` | Logical NOT |

#### Loops

IPL supports `while` loops and `for each` loops for iterating over arrays and result sets:

```ipl
// while loop

counter = 0;

while (counter < 5) 
{
    counter = counter + 1;
    log("Counter is " + counter);
}

/// use index and length to iterate over arrays
// arrays are declared in curly braces {} 

items = {"a", "b", "c"};

index = 0;
itemCount = Length(items); 

while (index < itemCount)
{
    Log("Item: " + item); 
    index = index + 1; 
}
```

#### Tasks

1. Open a text editor and write the following IPL variable assignment expressions:

   ```ipl
   // String variable
   hostName = "router01";

   // Integer variable
   retryCount = 3;

   // Boolean variable
   enrichmentRequired = True;

   // String concatenation
   alertKey = hostName + ":interface-down:" + "TrainingAlerts";
   ```

2. Add a conditional block that logs a message based on `retryCount`:

   ```ipl
   if (retryCount > 2) 
   {
       Log("Retry threshold reached for host: " + hostName);
   } 
   else 
   {
       Log("Retry count within normal range: " + retryCount);
   }
   ```

3. Add a `while` loop that iterates over a small array and logs each value:

   ```ipl
   severities = {3, 4, 5};
   index = 0;
   itemCount = Length(severities);

   while (index < itemCount)
   {
       Log("Processing severity level: " + sev);
       index = index + 1;
   }
   ```

   > **Note:** You do not need to run this code yet. In section 4.1 you will paste policy code directly into the Impact policy editor. These exercises build your familiarity with IPL syntax before you write live policies.

#### Validation

You have completed this section when:

- You can write a valid variable assignment for each of the four primary data types.
- You can write an `if` / `else if` / `else` block using at least two comparison operators.
- You can write a `while` loop that iterates over an array.
- You understand that IPL variables are not explicitly typed — type is inferred from the assigned value.

#### Expected result

You now understand some basic foundational IPL syntax used to create and maintain policies in Impact. The variable, conditional, and loop patterns covered here appear throughout the enrichment and automation policies you will write in section 4.

### 3.2 Accessing event data in a policy

#### Objective

In this section, you will learn how to access the fields of the triggering alert within a policy. By the end of the section, you will understand how to read event fields, store them in local variables, and use those values in conditional logic.

#### Background

When a service triggers a policy, it passes the current values of the triggering event's fields into the policy execution context. The policy can access these values through the `EventContainer` object, which is available as a special variable that holds all `alerts.status` field values for the event that fired the service.

The standard syntax for reading a field from the triggering event is:

```ipl
localVar = EventContainer.FieldName;
```

For example, to read the `Node`, `Severity`, and `Summary` fields:

```ipl
nodeValue    = EventContainer.Node;
sevValue     = EventContainer.Severity;
summaryValue = EventContainer.Summary;
```

Once stored in local variables, these values can be used in conditions, string operations, data source lookups, and write-back operations.

> **Note:** Field names in `EventContainer` are case-sensitive and must match the exact column names from `alerts.status`. Common fields used in policies include `Node`, `AlertKey`, `AlertGroup`, `Summary`, `Severity`, `Manager`, `Identifier`, and `Service`.

#### Example policy reading event fields

The following is a minimal IPL policy that reads key fields from a triggering event and logs them for inspection:

```ipl
// Read fields from the triggering event
nodeValue    = EventContainer.Node;
sevValue     = EventContainer.Severity;
summaryValue = EventContainer.Summary;
alertKey     = EventContainer.AlertKey;

// Log the values for diagnostic purposes
Log("Policy triggered for node: " + nodeValue);
Log("Severity: " + sevValue);
Log("Summary: " + summaryValue);
Log("AlertKey: " + alertKey);
```

The `Log` function writes a message to the Impact policy log. Its syntax is `Log(message)` — pass a single string expression and the message is always written to the policy log file. It is common practice to prepend the policy name to the message string, for example `Log("AA_EnrichAlert: enrichment started for Node=" + nodeValue)`, so that output from different policies is easy to identify when reading the log file or filtering with `grep`.

#### Tasks

1. Review the field list for the `alerts.status` table used in this lab. The fields you will access in enrichment policies are:

   | Field name | Type | Description |
   |---|---|---|
   | `Node` | String | Hostname or IP address of the source device |
   | `AlertKey` | String | Unique key for the alert condition |
   | `AlertGroup` | String | Logical grouping for the alert |
   | `Summary` | String | Human-readable description of the alert |
   | `Severity` | Integer | Numeric severity (1=Indeterminate, 2=Warning, 3=Minor, 4=Major, 5=Critical) |
   | `Identifier` | String | Unique identifier combining node, key, and group |
   | `CustomerID` | String | Custom field — populated by the enrichment policy |
   | `Service` | String | Custom field — populated by the enrichment policy |

2. Review the IPL code below that reads `Node`, `Severity`, `AlertKey`, and `Summary` from the triggering event and stores each in a local variable:

   ```ipl
   nodeValue    = EventContainer.Node;
   sevValue     = EventContainer.Severity;
   alertKey     = EventContainer.AlertKey;
   summaryValue = EventContainer.Summary;
   ```

3. The following adds a conditional check that logs different messages depending on severity:

   ```ipl
   if (sevValue >= 4) 
   {
       Log(2, "High severity event on node: " + nodeValue + ", Key: " + alertKey);
   } 
   else 
   {
       Log(2, "Event received on node: " + nodeValue + ", Severity: " + sevValue);
   }
   ```

#### Validation

You have completed this section when:

- You can write a valid `EventContainer.FieldName` expression for at least four `alerts.status` fields.
- You understand that field names in `EventContainer` are case-sensitive.
- You can explain what happens if you attempt to read a field that does not exist in `alerts.status`.
- You can use a severity value read from `EventContainer` in a conditional expression.

#### Expected result

You now know how to read any field from the triggering event inside a policy. This is the first step in every enrichment policy: read the event fields you need, then use those values to drive the lookup and write-back logic that follows.

### 3.3 Querying data sources from IPL

#### Objective

In this section, you will learn about the `GetByFilter` IPL function to query Impact data types. By the end of the section, you will understand how to call the function, process the results, and handle the case where no matching rows are found.

#### Background

IPL provides the `GetByFilter` function to retrieve data items from a configured Impact data type. The function queries the data source associated with the named data type and returns an **array** of matching data items.

**`[Array =] GetByFilter(DataType, Filter, [CountOnly]);`**

The arguments are:

| Argument | Type | Description |
|---|---|---|
| `dataTypeName` | String | The Impact data type name as configured in the Data Model tab (not the DSA name or table name) |
| `filterCondition` | String | A filter expression used to select matching data items. For SQL data sources, this is typically an SQL-style condition such as Location = 'New York'; do not include the WHERE keyword. |
| `countOnly` | Boolean | Optional. Retained for compatibility with earlier releases. Specify False; it does not return a matching-row count. |

For example:

```ipl
DataType = "DEVICE_INVENTORY";
Filter = "Location = 'New York' AND Facility = 'Manhattan'";
MyNodes = GetByFilter(DataType, Filter, False);
```

> **Note:** The first argument to `GetByFilter` is the **Impact data type name** — the name you gave the data type when you created it in section 2.2 (`DEVICE_INVENTORY`). It is not the DSA name and not the underlying database table name. Impact uses the data type configuration to resolve which DSA and table to query.

#### Checking for empty results

Always check the result array length before accessing elements. Accessing index `[0]` on an empty array will cause the policy to throw an error:

```ipl
filterCondition = "NODE_NAME = '" + nodeValue + "'";
results = GetByFilter("DEVICE_INVENTORY", filterCondition, False);

if (Length(results) > 0) {
    firstRow = results[0];
    customerID = firstRow.CUSTOMER_ID;
    service = firstRow.SERVICE;

    Log("Found inventory record for node: " + nodeValue
        + ", customer: " + customerID
        + ", service: " + service);
} else {
    Log("No inventory record found for node: " + nodeValue);
}
```

#### Building filter strings safely

When constructing a filter expression from a string value, ensure that embedded single quotes do not terminate the quoted value prematurely. For SQL-backed data types, a single quote within a string literal is represented by two single quotes.

For example, if nodeValue is it's-router-01, the value must become it''s-router-01 before it is included in the filter expression:

```ipl
nodeFilterValue = Replace(nodeValue, "'", "''", 0);
filterCondition = "NODE_NAME = '" + nodeFilterValue + "'";
results = GetByFilter("DEVICE_INVENTORY", filterCondition, False);
```

The final filter expression then becomes:

```
NODE_NAME = 'it''s-router-01'
```

The final 0 argument tells Replace() to replace every matching occurrence. Replace() uses regular expressions for its pattern argument and requires the expression, pattern, replacement value, and maximum number of replacements.


#### Tasks

1. Review the following IPL code along with its comments. Note the `GetByFilter` IPL function call that looks up `nodeValue` in the `DEVICE_INVENTORY` data type. Store the result and guard against an empty response:

   ```ipl
    // Read the Node value from the event that invoked this policy.
    // EventContainer is the policy context object containing the incoming event fields.
    nodeValue = EventContainer.Node;


    // Replace embedded single quotes in the node name with two single quotes.
    // For an SQL-backed data type, this prevents a single quote from prematurely
    // ending the quoted value in the filter expression.
    nodeFilterValue = Replace(nodeValue, "'", "''", 9999);


    // Build the GetByFilter expression used to locate an inventory row whose
    // NODE_NAME field exactly matches the event's Node value.
    //
    // Example:
    // nodeValue = "router01"
    // filter = "NODE_NAME = 'router01'"
    //
    // If nodeValue = "it's-router-01", the escaped filter becomes:
    // "NODE_NAME = 'it''s-router-01'"
    filter = "NODE_NAME = '" + nodeFilterValue + "'";


    // Query the configured Impact data type named DEVICE_INVENTORY.
    // The result is an array containing zero or more matching data items.
    // False is the optional CountOnly argument and should normally be specified
    // as False; it is retained for backward compatibility.
    results = GetByFilter("DEVICE_INVENTORY", filter, False);


    // Check that at least one inventory record was returned before attempting
    // to access the first element of the result array.
    if (Length(results) > 0)
    {
        // Retrieve the first matching data item from the returned array.
        // If duplicate NODE_NAME values exist, this selects only the first row.
        inventoryRow = results[0];

        // Copy the CUSTOMER_ID field from the matching inventory record
        // into a policy variable for later use.
        customerID = inventoryRow.CUSTOMER_ID;

        // Copy the SERVICE field from the matching inventory record
        // into a policy variable for later use.
        serviceName = inventoryRow.SERVICE;

        // Write a diagnostic message at log level 2. This message is recorded only
        // when the Policy Logger service is configured with a highest log level
        // of 2 or greater.
        Log("Inventory record found for node: " + nodeValue);
    }
    else
    {
        // Write a level-2 diagnostic message when no DEVICE_INVENTORY record
        // matches the event Node value.
        Log("No inventory record for node: " + nodeValue);
    }
   ```

2. Review this `GetByFilter` call that retrieves all events from the ObjectServer data type `EVENTS` where `Severity` equals 5. Log the count of matching rows:

   ```ipl
   criticalEvents = GetByFilter("defaultobjectserver", "Severity = 5", False);

   Log("Critical events found: " + Length(criticalEvents));
   ```

3. Extend the example from task 2 to iterate over the results and log the `Node` and `Summary` for each row:

   ```ipl
   criticalEvents = GetByFilter("defaultobjectserver", "Severity = 5", False);

   if (Length(criticalEvents) > 0) 
   {
       for each event in criticalEvents 
       {
           Log("Critical: Node=" + event.Node + ", Summary=" + event.Summary);
       }
   } 
   else 
   {
       Log("No critical events found.");
   }
   ```

   > **Note:** You do not need to run these snippets yet. You will use these patterns directly in the policies you build in section 4.

#### Validation

You have completed this section when:

- You can write a `GetByFilter` call with the correct three-argument signature.
- You understand that the first argument is the Impact data type name, not the DSA or table name.
- You can check the length of a `GetByFilter` result before accessing its elements.
- You can explain why single quotes in field values must be escaped before building a filter string.
- You can iterate over a `GetByFilter` result array using a `for each` loop.

#### Expected result

You now understand the data retrieval function and the empty-check pattern required to use it safely. These patterns form the lookup step in every enrichment policy — reading event fields is step one; looking up matching inventory data is step two.

### 3.4 Writing values back to the ObjectServer

#### Objective

In this section, you will learn how to write values from a policy back to the OMNIbus ObjectServer by updating fields on the triggering alert. By the end of the section, you will understand how to assign new values directly to `EventContainer` fields and use `ReturnEvent` to commit those changes back to the ObjectServer.

#### Background

The primary purpose of most Impact enrichment policies is to update alert fields in `alerts.status` with data retrieved from an external source. This write-back operation is performed in two steps:

1. **Assign** the new value directly to the `EventContainer` field using standard assignment syntax.
2. **Commit** the changes back to the ObjectServer by calling `ReturnEvent(EventContainer)`.

The assignment syntax mirrors the read syntax from section 3.2:

```ipl
EventContainer.FieldName = newValue;
```

For example, after looking up customer data from the inventory database, the following code writes the customer ID and service name back to the alert:

```ipl
EventContainer.CustomerID = customerID;
EventContainer.Service    = serviceName;
```

After all assignments are complete, call `ReturnEvent` to push the updated `EventContainer` back to the ObjectServer:

```ipl
ReturnEvent(EventContainer);
```

Without `ReturnEvent`, the changes exist only in the local execution context — the ObjectServer alert is not updated.

#### Important considerations

- **Field names are case-sensitive**: `CustomerID` is not the same as `customerid`. The field name must exactly match the column name in `alerts.status`.
- **Custom fields must exist**: Fields written to `EventContainer` must already exist as columns in `alerts.status`. Writing to a non-existent field will not create the column. The `ImpactFlag`, `CustomerID`, and `Service` fields added in earlier exercises are examples of custom fields that must be created before Impact can write to them.
- **Only the triggering event is updated**: `ReturnEvent(EventContainer)` updates the specific alert that triggered the policy. To update other alerts, a separate `GetByFilter` against the ObjectServer data type followed by explicit assignments on each returned row is required.
- **Call `ReturnEvent` once, after all assignments**: Assign all the field values you need first, then call `ReturnEvent` a single time to commit the complete set of changes in one operation.

#### Example write-back snippet

```ipl
// Read the node from the triggering event
nodeValue = EventContainer.Node;

// Look up customer information in the inventory database
nodeFilterValue = Replace(nodeValue, "'", "''");
filter = "NODE_NAME = '" + nodeFilterValue + "'";
results = GetByFilter("DEVICE_INVENTORY", filter, False);

if (Length(results) > 0) {
    inventoryRow = results[0];

    // Assign enrichment fields directly to EventContainer
    EventContainer.CustomerID  = inventoryRow.CUSTOMER_ID;
    EventContainer.Service     = inventoryRow.SERVICE;
    EventContainer.ImpactFlag  = 1;

    Log(2, "Enriched alert for node: " + nodeValue
        + " with customer: " + inventoryRow.CUSTOMER_ID);
} else {
    EventContainer.CustomerID  = "NOT_FOUND";
    EventContainer.Service     = "NOT_FOUND";
    EventContainer.ImpactFlag  = 2;

    Log(2, "No inventory record found for node: " + nodeValue
        + " — enrichment skipped");
}

// Commit all changes back to the ObjectServer
ReturnEvent(EventContainer);
```

#### Tasks

1. Review the important considerations listed in the background section. In your own words, answer the following:
   - What happens if you assign a value to an `EventContainer` field that does not exist as a column in `alerts.status`?
   - Can you use `ReturnEvent` to update a different alert (not the one that triggered the policy)? If not, what would you need to do instead?
   - Why should all field assignments be made before calling `ReturnEvent` rather than calling `ReturnEvent` after each individual assignment?

#### Validation

You have completed this section when:

- You can write a complete enrichment write-back block using `EventContainer.Field = value` assignment syntax.
- You understand that `ReturnEvent(EventContainer)` is required to commit the changes to the ObjectServer.
- You understand that field names in `EventContainer` are case-sensitive and must match existing `alerts.status` columns.
- You can explain the difference between updating the triggering event and updating another alert.
- You can describe the read → look up → assign → `ReturnEvent` pattern that all enrichment policies follow.

#### Expected result

You now know how to write data back to the ObjectServer from a policy. Combined with reading event fields (section 3.2) and querying data sources (section 3.3), you have all three building blocks of a complete enrichment policy. Section 4 puts these blocks together into policies that run against live event data.

### 3.5 Built-in IPL functions reference

The following table summarizes some commonly used IPL built-in functions. These functions will be used throughout the policy-building exercises in section 4.

| Function | Signature | Description |
|----------|-----------|-------------|
| `Log` | `Log(message)` | Writes a message to the Impact policy log. Pass a string expression; the message is always written to the policy log file. |
| `GetByFilter` | `GetByFilter(dataTypeName, filter, [countOnly])` | Returns an array of data items from the named Impact data type that match the filter expression. The optional countOnly parameter is retained for compatibility; specify False for normal retrieval. The filter is interpreted by the DSA associated with the data type. |
| `ReturnEvent` | `ReturnEvent(EventContainer)` | Returns an event container to its event source. For an incoming ObjectServer event, this commits updates made to event fields; it can also be used to add a journal entry or delete an event when the appropriate EventContainer state variables are set. |
| `Replace` | `Replace(string, pattern, replacement, maxReplacements)` | Returns a new string after replacing occurrences that match the specified regular-expression pattern. The final argument controls the maximum number of replacemednts.  |
| `Length` | `Length(array)` | Returns the number of elements in an array. Use to check `GetByFilter` results before accessing elements. |
| `ToUpper` | `ToUpper(str)` | Returns the input string converted to uppercase. |
| `ToLower` | `ToLower(str)` | Returns the input string converted to lowercase. |
| `Trim` | `Trim(str)` | Returns the input string with leading and trailing whitespace removed. |
| `Contains` | `Contains(str, substr)` | Returns `True` if `str` contains `substr`, otherwise `False`. |
| `GetDate` | `GetDate()` | Returns the current date/time value as seconds since the UNIX epoch. It is commonly passed to LocalTime() for formatting. |
| `LocalTime` | `LocalTime(timestamp, [pattern]])` | Converts an epoch time value to a formatted local date/time string. |
| `IsNull` | `IsNull(value)` | Returns `True` if the value is `NULL`, otherwise `False`. |
| `ToString` | `ToString(value)` | Converts a non-string value to its string representation. |
| `ToInteger` | `ToInteger(str)` | Converts a string to an integer value. |


This is only a subset of all functions available in Impact Policy Language. For a complete listing, consult the Netcool/Impact functions list available at the following link: https://www.ibm.com/docs/en/tivoli-netcoolimpact/7.1.0?topic=policies-working-functions

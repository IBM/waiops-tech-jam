cd $IMPACT_HOME/bin

# Create export destination directory
mkdir -p /tmp/impact-exports

# Export the ImpactLabProject
./nci_export NCI --project ImpactLabProject /tmp/impact-exports/ImpactLabProject

# Verify the export directory is populated
find /tmp/impact-exports/ImpactLabProject -type f | sort

# Import the project back (run after deleting test artifacts)
./nci_import NCI /tmp/impact-exports/ImpactLabProject

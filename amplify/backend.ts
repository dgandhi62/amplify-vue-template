import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

for (const table of Object.values(backend.data.resources.cfnResources.amplifyDynamoDbTables))
{   
    (table as any).cfnTable.addPropertyOverride('DeletionProtectionEnabled', false);
}
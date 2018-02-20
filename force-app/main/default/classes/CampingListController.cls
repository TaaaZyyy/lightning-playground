public with sharing class CampingListController {
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
/*
        List<String> fieldsToCheck = new List<string> {
            'Id', 'Name', 'Price__c', 'Quantity__c', 'Packed__c'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens = schema.SObjectType.Expense__c.fields.getMap();

        for (String field : fieldsToCheck) {
            if (!fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
                return null;
            }
        }
*/
        return [
            SELECT
                Id,
                Name,
                Price__c,
                Quantity__c,
                Packed__c
            FROM
                Camping_Item__c
        ];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        upsert item;
        return item;
    }
}

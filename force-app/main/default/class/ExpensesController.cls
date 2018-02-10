public with sharing class ExpensesController {
    // with sharing は組織の共有ルールが適応される。
    // オブジェクトレベルセキュリティ、項目レベルセキュリティなどは適応されない。
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        // check to make sure all fields are accessible to this user
        // describe コールはコストが高くなります。アプリケーションでこのメソッドを頻繁に
        // コールする場合、最適化する方法やユーザごとのアクセスチェックをキャッシュする方法を見つける必要があります。
        List<String> fieldsToCheck = new List<String> {
            'Id', 'Name', 'Amount__c', 'Client__c', 'Date__c', 'Reimbursed__c', 'CreateDate'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens = schema.SObjectType.Expense__c.fields.getMap();

        for (String field : fieldsToCheck) {
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
                return null;
            }
        }

        return [
            SELECT
                Id,
                Name,
                Amount__c,
                Client__c,
                Date__c,
                Reimbursed__c,
                CreatedDate
            FROM
                Expense__c
        ];
    }

    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // 仮引数名はjavascriptのsetParamsで設定するパラメータ名と一致する必要がある
        upsert expense;
        return expense;
    }
}

export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/aa/Services/Au.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/aa/Actions/Books/Books_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/aa/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/aa/Actions/Books/Books_CreateEntity.action');
    }
}
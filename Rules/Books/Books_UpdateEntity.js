export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/aa/Services/Au.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/aa/Actions/Books/Books_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/aa/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/aa/Actions/Books/Books_UpdateEntity.action');
    }
}
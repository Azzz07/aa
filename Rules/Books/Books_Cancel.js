export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/aa/Services/Au.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/aa/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/aa/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/aa/Actions/CloseModalPage_Cancel.action');
    }
}
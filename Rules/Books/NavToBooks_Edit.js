export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/aa/Services/Au.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/aa/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/aa/Actions/Books/NavToBooks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/aa/Actions/Books/NavToBooks_Edit.action');
    }
}
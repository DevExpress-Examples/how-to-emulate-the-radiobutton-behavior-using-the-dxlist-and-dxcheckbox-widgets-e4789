Application2.Index = function (params) {
    var viewModel = {
        listItems: ko.observableArray([
            {
                Id: 1,
                Name: 'Item_1',
                checkedState: ko.observable(true)
            },
            {
                Id: 2,
                Name: 'Item_2',
                checkedState: ko.observable(false)
            },
            {
                Id: 3,
                Name: 'Item_3',
                checkedState: ko.observable(false)
            }
        ]),
        CheckBoList_OnClick: function (itemData) {
            if (itemData.checkedState()) {
                for (var i = 0; i < viewModel.listItems().length; i++) {
                    if (itemData.Id != viewModel.listItems()[i].Id && viewModel.listItems()[i].checkedState())
                        viewModel.listItems()[i].checkedState(false);
                }
            }
            else
                itemData.checkedState(true)
        }
    };
    return viewModel;
};
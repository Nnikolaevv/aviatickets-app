
    import 'materialize-css/dist/css/materialize.min.css';
    import 'materialize-css/dist/js/materialize.min';


    // Init select
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);

    export function getSelectInstance(elem) {
        return M.FormSelect.getInstance(elem)
    }


    // Init autocomplete
    const autocomplete = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(autocomplete, {
        data : {}
    })

    export function getAutocompleteInstance(elem) {
        return M.Autocomplete.getInstance(elem)
    }

    // Init datepicker
    const datePickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePickers, {
        showClearBtn: true,
        format: 'yyyy-mm'
    });

    export function getDatePickerInstance(elem) {
        return M.Datepicker.getInstance(elem)
    }

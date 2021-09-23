import './plugins';
import formUI from "./views/form";
import '../css/style.css';
import location from "./store/location";
import currencyUI from "./views/currency";
import ticketsUI from "./views/tickets";
import favoriteTickets from "./store/favoriteTickets";

document.addEventListener('DOMContentLoaded', () => {
    initApp();

    const form = formUI.form
    const favoriteBtnOnTicket = favoriteTickets.favoriteBtnOnTicket
    const favoriteBtnAtHead = favoriteTickets.favoriteBtnAtHead
    const deleteBtn = favoriteTickets.deleteFavoriteBtn

    // Events
    form.addEventListener('submit', e => {
        e.preventDefault();
        onFormSubmit();
    })

    favoriteBtnOnTicket.addEventListener('click', e => {
        if (e.target.classList.contains('add-favorite')) {
            favoriteTickets.addFavoriteTicketsToStore(e.target)
        }
        favoriteTickets.renderFavoriteTickets(favoriteTickets.favoriteTicketsStore)

    })

    favoriteBtnAtHead.addEventListener('click', e => {
        favoriteTickets.renderFavoriteTickets(favoriteTickets.favoriteTicketsStore);
        favoriteTickets.containerFavorite.classList.toggle('d-flex')
        favoriteTickets.containerFavorite.classList.toggle('opacity')

    })

    deleteBtn.addEventListener('click', e => {
        if (e.target.classList.contains('delete-favorite')) {
            favoriteTickets.getIdOnDeleteFavoriteTicket(e.target);
        }
    })

    // Handlers
    async function initApp() {
        await location.init();
        formUI.setAutoCompleteData(location.shortCitiesList)
    }

    async function onFormSubmit() {
        const origin = location.getCityCodeByKey(formUI.originValue);
        const destination = location.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        await location.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,

        })

        ticketsUI.renderTickets(location.lastSearch)
    }
})











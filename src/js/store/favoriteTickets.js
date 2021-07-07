
    import location from "./location";

    class FavoriteTickets {
        constructor() {
            this.favoriteBtnOnTicket = document.querySelector('.container-tickets');
            this.favoriteBtnAtHead = document.querySelector('.btn');
            this.deleteFavoriteBtn = document.querySelector('.favorites')
            this.containerFavorite = document.querySelector('.dropdown-content');
            this.favoriteTicketsStore = [];
        }



        addFavoriteTicketsToStore(el) {
            const idEl = parseInt(el.parentElement.id)
            location.lastSearch.forEach(ticket => {
                if (ticket.id === idEl) {
                    if (this.favoriteTicketsStore.includes(ticket)) {
                        return
                    }
                    this.favoriteTicketsStore.push(ticket)
                }
            })
            }

        getIdOnDeleteFavoriteTicket(el) {
            const dataID = el.parentElement.parentElement.dataset.id
            this.deleteFavoriteTicket(dataID)

        }

        deleteFavoriteTicket(id) {
            this.favoriteTicketsStore = this.favoriteTicketsStore.filter(ticket => ticket.id !== parseInt(id))
                this.renderFavoriteTickets(this.favoriteTicketsStore)
                }



        clearFavoriteContainer() {
            this.containerFavorite.innerHTML = ''

        }

        renderFavoriteTickets(tickets) {
            this.clearFavoriteContainer();
            let fragment = '';
            tickets.forEach(ticket => {
                const template = FavoriteTickets.favoriteTicketsTemplate(ticket);
                fragment += template
               })

            this.containerFavorite.insertAdjacentHTML('afterbegin', fragment)
        }

        static favoriteTicketsTemplate(ticket) {
            return `
            <div class="favorite-item  d-flex align-items-start  ml-ml"" data-id="${ticket.id}">
              <img src="${ticket.airline_logo}" class="favorite-item-airline-img"/>
              <div class="favorite-item-info d-flex flex-column">
                <div class="favorite-item-destination d-flex align-items-center">
                  <div class="d-flex align-items-center mr-auto">
                    <span class="favorite-item-city">${ticket.origin_name}</span>
                    <i class="medium material-icons">flight_takeoff</i>
                  </div>
                  <div class="d-flex align-items-center">
                    <i class="medium material-icons">flight_land</i>
                    <span class="favorite-item-city">${ticket.destination_name}</span>
                  </div>
                </div>
                <div class="ticket-time-price d-flex align-items-center">
                  <span class="ticket-time-departure">${ticket.departure_at}</span>
                  <span class="ticket-price ml-auto">${ticket.price}</span>
                </div>
                <div class="ticket-additional-info">
                  <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
                  <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
                </div>
                <a class="waves-effect waves-light btn-small pink darken-3 delete-favorite ml-auto">Delete</a>
              </div>
            </div>`
        }
    }


    const favoriteTickets = new FavoriteTickets();

    export default favoriteTickets
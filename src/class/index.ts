import {
  CountryResponse,
  DisciplineResponse,
  EventOptionalParams,
  EventResponse,
  EventsResponse,
  VenueResponse,
} from '../types/index';

export class CodanteClient {
    private static BASE_API_URL: string = "https://apis.codante.io/olympic-games"

    /**
     * List of games/events
     * This endpoint returns a list of all the games/events with filter options, such as country, discipline, venue, date, and competitor and others.
     * https://docs.apis.codante.io/olympic-games-english#list-of-games-events
     * @param {string} country - The country of the event (can call countries endpoint to get the list of updated countries)
     * @param {string} discipline - The discipline of the event (can call disciplines endpoint to get the list of updated disciplines)
     * @param {string} venue - The venue of the event (can call venues endpoint to get the list of updated venues)
     * @param {string} date - The date of the event (YYYY-MM-DD)
     * @param {string} competitor - The competitor of the event
     * @param {number} page - The pagination number
     * @returns {Promise<EventsResponse>}
     */
    static async events(params?: EventOptionalParams): Promise<EventsResponse> {
        if (params) {
            const queryParams = Object.entries(params).map(([key, value]) => `${key}=${value}`);
            const queryString = queryParams.join('&');
            const response = await fetch(`${this.BASE_API_URL}/events?${queryString}`);

            return response.json();
        }

        const response = await fetch(`${this.BASE_API_URL}/events`)

        return response.json()
    }

    /**
     * Event details by ID
     * https://docs.apis.codante.io/olympic-games-english#game-by-id
     * @param {string} id - The ID of the event
     * @returns {Promise<EventResponse>}
     */
    static async event(id: string): Promise<EventResponse> {
        if (!id) throw new Error("Event ID is required")

        const response = await fetch(`${this.BASE_API_URL}/events/${id}`)

        return response.json()
    }

    /**
     * List all the event locations with their details suck as url, name, and id.
     * This ENDPOINT IS ABOVE THE CURRENT (NO LINK WAS PROVIDED FOR THIS ENDPOINT)
     * https://docs.apis.codante.io/olympic-games-english#list-of-sports
     * @returns {Promise<VenueResponse>}
     */
    static async venues(): Promise<VenueResponse> {
        const response = await fetch(`${this.BASE_API_URL}/venues`)

        return response.json()
    }

    /**
     * List all the disciplines (sports) with their details such as name, id, and pictogram.
     * https://docs.apis.codante.io/olympic-games-english#list-of-sports
     * @returns {Promise<DisciplineResponse>}
     */
    static async disciplines(): Promise<DisciplineResponse> {
        const response = await fetch(`${this.BASE_API_URL}/disciplines`)
        
        return response.json()
    }

    /**
     * List of Medals and Countries, You also can pass a param to specify the page.
     * https://docs.apis.codante.io/olympic-games-english#list-of-medals-and-countries
     * @param {number} page - The pagination number
     * @returns {Promise<CountryResponse>}
     */
    static async countries(page: number = 1): Promise<CountryResponse> {
        const response = await fetch(`${this.BASE_API_URL}/countries?page=${page}`)

        return response.json()
    }
}
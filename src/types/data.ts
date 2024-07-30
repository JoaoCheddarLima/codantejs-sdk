import {
  CountriesTypes,
  DisciplinesTypes,
  VenuesTypes,
} from './index';

export interface EventOptionalParams {
    country?: CountriesTypes | string;
    discipline?: DisciplinesTypes | string;
    venue?: VenuesTypes | string;
    date?: string;
    competitor?: string;
    page?: number;
}

export interface EventData {
    id: number;
    day: string;
    discipline_name: string;
    discipline_pictogram: string;
    name: string | null;
    venue_name: string;
    event_name: string;
    detailed_event_name: string;
    start_date: string;
    end_date: string;
    status: string;
    is_medal_event: number;
    is_live: number;
    competitors: Competitor[];
}

export interface Competitor {
    country_id: string;
    country_flag_url: string;
    competitor_name: string;
    position: number;
    result_position: string;
    result_winnerLoserTie: "L" | "W" | "T";
    result_mark: string;
}

export interface Links {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links?: string[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Venue {
    id: string;
    name: string;
    url: string;
}

export interface Discipline {
    id: string;
    name: string;
    pictogram: string;
}

export interface Country {
    id: CountriesTypes | string;
    name: string;
    continent: string;
    flag_url: string;
    gold_medals: number;
    silver_medals: number;
    bronze_medals: number;
    total_medals: number;
    rank: number;
    rank_total_medals: number;
}

export interface CountryResponse {
    data: Country[];
    links: Links;
    meta: Meta;
}

export interface VenueResponse {
    data: Venue[];
}

export interface EventsResponse {
    data: EventData[];
    links: Links;
    meta: Meta;
}

export interface EventResponse {
    data: EventData;
}

export interface DisciplineResponse {
    data: Discipline[];
}
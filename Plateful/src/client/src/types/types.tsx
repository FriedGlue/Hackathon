export type PantryJson = {
    name: string;
    facility: string;
    pantry_exterior_url: string;
    latest_contents_url: string;
    campus: string;
    floor: string;
    hours: string;
    directions: string;
    date_last_opened: string;
    time_last_opened: string;
    public_key: string;
};
  
export type RouteError = Error & {
    statusText?: string;
    status?: string;
};
export interface ICrendentials {
    email: string|null;
    accessToken?: string| null;
    uid: string | undefined;
    displayName?: string| null;
    jwtToken: string | null;
    name: string | null;
  }
  export interface IActivity {
    resource_state?:                number;
    athlete?:                       Athlete;
    name?:                          string;
    distance?:                      number;
    moving_time?:                   number;
    elapsed_time?:                  number;
    total_elevation_gain?:          number;
    type?:                          Type;
    sport_type?:                    Type;
    id?:                            number;
    start_date?:                    Date;
    start_date_local?:              Date;
    timezone?:                      Timezone;
    utc_offset?:                    number;
    location_city?:                 null;
    location_state?:                null;
    location_country?:              LocationCountry;
    achievement_count?:             number;
    kudos_count?:                   number;
    comment_count?:                 number;
    athlete_count?:                 number;
    photo_count?:                   number;
    map?:                           Map;
    trainer?:                       boolean;
    commute?:                       boolean;
    manual?:                        boolean;
    private?:                       boolean;
    visibility?:                    Visibility;
    flagged?:                       boolean;
    gear_id?:                       null;
    start_latlng?:                  number[];
    end_latlng?:                    number[];
    average_speed?:                 number;
    max_speed?:                     number;
    average_cadence?:               number;
    average_watts?:                 number;
    max_watts?:                     number;
    weighted_average_watts?:        number;
    kilojoules?:                    number;
    device_watts?:                  boolean;
    has_heartrate?:                 boolean;
    heartrate_opt_out?:             boolean;
    display_hide_heartrate_option?: boolean;
    elev_high?:                     number;
    elev_low?:                      number;
    upload_id?:                     number;
    upload_id_str?:                 string;
    external_id?:                   string;
    from_accepted_tag?:             boolean;
    pr_count?:                      number;
    total_photo_count?:             number;
    has_kudoed?:                    boolean;
}

export interface Athlete {
    id?:             number;
    resource_state?: number;
}

export type LocationCountry = "Argentina";

export interface Map {
    id?:               string;
    summary_polyline?: string;
    resource_state?:   number;
}

export type Type = "VirtualRide";

export type Timezone = "(GMT-03:00) America/Argentina/Buenos_Aires";

export type Visibility = "everyone";

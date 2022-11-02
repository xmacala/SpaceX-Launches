export const SPACEX_QUERY = `
{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      rocket {
        rocket_name
        rocket {
          description
          height {
            meters
          }
          landing_legs {
            number
            material
          }
          mass {
            kg
          }
          first_flight
        }
      }
      details
      links {
        article_link
        video_link
      }
      ships {
        name
        image
      }
      id
    }
  }
  
`;


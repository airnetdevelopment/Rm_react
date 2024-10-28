import React from 'react';
import { Card } from 'primereact/card';
import { Tooltip } from 'primereact/tooltip';
import 'primeicons/primeicons.css'; // Import PrimeIcons
import 'primereact/resources/themes/saga-blue/theme.css'; // Import PrimeReact theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact core styles
import sedan from '../../assets/Iconslatestpackage/sedan-car-model.png';


const Sightdata=[
 {
          "id": "sight-109384P53",
          "start": "2024-09-10T19:00:00.000Z",
          "end": "2024-09-10T22:00:00.000Z",
          "type": "sight",
          "title": "Rome Trastevere Food Tour with Dinner and Wine",
          "description": "{\"sightseeing_id\":212,\"result_index\":41,\"sightseeing_name\":\"Rome Trastevere Food Tour with Dinner and Wine\",\"sightseeing_code\":\"109384P53\",\"city_id\":134622,\"tour_summary\":\"Learn how to eat and drink like a Roman local during this three-hour, small-group dinner crawl through trendy Trastevere. Skip the tourist traps and explore hidden gems and locally-loved, in-the-know eateries. Discover the history of Roman cuisine and meet the people behind the city’s famed gastronomy. Taste over 10 different traditional dishes along the way, from pizza and pasta to cheeses, Italian wine, and gelato.\\n\\n- Enjoy a 3-hour small-group food tasting tour through Rome’s Trastevere district \\n- Uncover one of the city’s most vibrant quarters with your expert, foodie guide\\n- Discover a truly personalised experience with a local guide\\n-Sample up to 10 traditional Roman food items including some street food staples, small bites, and a sit down dinner with drinks. \\n\\n*If you are gluten intolerant please book privately so we can run a special gluten free tour*\",\"condition_text\":null,\"guidelines\":null,\"additional_information\":\"Wheelchair accessible|Infants and small children can ride in a pram or stroller|Service animals allowed|Public transportation options are available nearby|Transportation options are wheelchair accessible|Suitable for all physical fitness levels|\",\"total_duration\":\"150\",\"from_date\":\"2024-09-05 00:00:00\",\"tour_desc\":\"Learn how to eat and drink like a Roman local during this three-hour, small-group dinner crawl through trendy Trastevere. Skip the tourist traps and explore hidden gems and locally-loved, in-the-know eateries. Discover the history of Roman cuisine and meet the people behind the city’s famed gastronomy. Taste over 10 different traditional dishes along the way, from pizza and pasta to cheeses, Italian wine, and gelato.\\n\\n- Enjoy a 3-hour small-group food tasting tour through Rome’s Trastevere district \\n- Uncover one of the city’s most vibrant quarters with your expert, foodie guide\\n- Discover a truly personalised experience with a local guide\\n-Sample up to 10 traditional Roman food items including some street food staples, small bites, and a sit down dinner with drinks. \\n\\n*If you are gluten intolerant please book privately so we can run a special gluten free tour*<br/><br/><strong>Inclusions: </strong>A local, foodie guide, who knows all the best spots|Enjoy bites of local Roman street food|Try a surprise main course meal, too! |We have vegetarian options but it's always best to let us know about dietary restrictions in advance|Try a scoop of an Italian staple: Gelato|Try glasses of local, Italian wine|Taste local meats and cheeses, made by the experts|<br/><br/><strong>Exclusions: </strong>Please bring a reusable water bottle to refill at water stations along our route so we reduce waste|We can’t accommodate a gluten-free or vegan diet but we hope to be able to in the future|\",\"plan\":[{\"code\":\"109384P53|TG2~17:00\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~19:00\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~17:30\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00 Departure Time:17:30\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~13:00\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~18:30\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00 Departure Time:17:30 Departure Time:18:30\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~00:00\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00 Departure Time:17:30 Departure Time:18:30 Departure Time:00:00\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~18:00\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00 Departure Time:17:30 Departure Time:18:30 Departure Time:00:00 Departure Time:18:00\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"},{\"code\":\"109384P53|TG2~12:30\",\"languages\":\"en-GUIDE\",\"special_text\":\"Trastevere Food Tour\",\"tour_details\":\" Departure Time:17:00 Departure Time:19:00 Departure Time:13:00 Departure Time:17:30 Departure Time:18:30 Departure Time:00:00 Departure Time:18:00 Departure Time:12:30\",\"currency_code\":\"INR\",\"offered_price\":7345.86,\"published_price\":7345.86,\"agent_commission\":0,\"cancellation_fee\":\"100.00%\",\"last_cancellation_date\":\"2024-09-02 23:59:59.000000\"}],\"city_name\":\"Rome\",\"country_code\":\"IT\",\"sight_types\":[\"best conversion\",\"excellent quality\",\"food & drink\",\"spring break\",\"walking tours\",\"wine tastings\",\"wine tours\"],\"images\":[{\"image_url\":\"https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/13/18/35/ff.jpg\"}],\"notes\":\"Duration is inferred as 3 hours from the 'three-hour, small-group dinner crawl' description and the specified available times. Gluten-free and vegan diets are not accommodated, but vegetarian options are available with advance notice.\",\"api_used\":\"fireworks_llama_3_1_405b\",\"best_for\":[\"couples\",\"food connoisseurs\",\"groups\",\"culture vultures\"],\"category\":[\"culinary\",\"urban exploration\",\"educational\"],\"kid_friendly\":true,\"transit_type\":\"\",\"drop_provided\":false,\"food_provided\":true,\"available_times\":[\"13:00\",\"17:00\",\"17:30\",\"18:00\",\"18:30\",\"19:00\"],\"pickup_provided\":false,\"best_time_of_day\":\"evening\",\"duration_minutes\":180,\"relaxation_level\":4,\"physical_intensity\":2,\"is_transit_activity\":false,\"unique_experience_rating\":4}",
          "pickup_provided": false,
          "drop_provided": false,
          "city_id": 134622
        }
  
]

const SightData = Sightdata[0];

// Convert ISO date strings to local time using toLocaleTimeString
const startTime = new Date(SightData.start).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const endTime = new Date(SightData.end).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

const Sight = () => {
    return (

      <div className="shadow-md event-div p-2 m-1 rounded flex">
      
      
      {/* Event Details */}
      <div className='flex flex-col text-center flex-grow'>
        <div className='font-bold underline'>{startTime}-{endTime}</div>
        <div className='mb-1'>
          {SightData.title.split(': ')[0]} <br />
          {SightData.title.split(': ')[1]}
        </div>
      </div>
    </div>
    
       
    );
};

export default Sight;

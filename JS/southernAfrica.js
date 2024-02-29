const countries = [
    {
        name: "Algeria",
        capital: "Algiers",
        region: "North Africa",
        population: "45,606,480",
        languageSpoken: "Arabic (official), Berber, French",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Couscous, Tagine, Merguez, Chakchouka",
        description: "Known for Sahara Desert, ancient Roman ruins, War of Independence.",
        flag: "./img/Algeria.png",
      },
      {
        name: "Angola",
        capital: "Luanda",
        region: "Southern Africa",
        population: "36,684,202",
        languageSpoken: "Portuguese (official), Umbundu, Kikongo, others",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Funge, Moamba de galinha, Calulu, Xinxim de galinha",
        description: "Known for oil reserves, Angolan Civil War, rich cultural heritage.",
        flag: "./img/Angola.png",
      },
      {
        name: "Benin",
        capital: "Porto-Novo (official), Cotonou (economic)",
        region: "West Africa",
        population: "13,712,828",
        languageSpoken: "French (official), Fon, Yoruba, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Fufu, Ayimolou, Akassa, Gbèzè",
        description: "Known for Dahomey Kingdom, voodoo culture, Ouidah.",
        flag: "./img/Benin.png",
      },
      {
        name: "Botswana",
        capital: "Gaborone",
        region: "Southern Africa",
        population: "2,675,352",
        languageSpoken: "English (official), Tswana",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Seswaa, Pap, Morogo, Vetkoek",
        description: "Known for Okavango Delta, diamond mining, stable democracy.",
        flag: "./img/Botswana.png",
      },
      {
        name: "Burkina Faso",
        capital: "Ouagadougou",
        region: "West Africa",
        population: "23,251,485",
        languageSpoken: "French (official), Moore, Dioula, others",
        religion: "Islam, Christianity, Indigenous beliefs",
        stapleFood: "Tô, Riz gras, Banfora bananas, Poulet bicyclette",
        description: "Known for Mossi Kingdoms, FESPACO film festival, cotton production.",
        flag: "./img/Burkina_Faso.png",
      },
      {
        name: "Burundi",
        capital: "Gitega (political), Bujumbura (economic)",
        region: "East Africa",
        population: "13,238,559",
        languageSpoken:" Kirundi (official), French, English",
        religion: "Christianity (predominantly Roman Catholicism), Indigenous beliefs",
        stapleFood: "Cassava, Sweet Potatoes, Maize, Beans",
        description: "Known for beautiful landscapes, Lake Tanganyika, troubled history.",
        flag: "./img/Burundi.png" ,
      },
      {
        name: "Cape Verde",
        capital: "Praia",
        region: "West Africa",
        population: "598,682",
        languageSpoken: "Portuguese (official)",
        religion: "Christianity (predominantly Roman Catholicism)",
        stapleFood: "Cachupa, Buzio, Lagosta grelhada, Xerém",
        description: "Known for stunning beaches, Creole culture, volcanic landscapes.",
        flag: "./img/Cape_Verde.png",
      },
      {
        name: "Cameroon",
        capital: "Yaoundé",
        region: "Central Africa",
        population: "28,647,293",
        languageSpoken: "French (official), English",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Ndolé, Poulet DG, Suya, Koki",
        description: "Known for diverse wildlife, Mount Cameroon, cultural diversity.",
        flag: "./img/Cameroon.png",
      },
      {
        name: "Central African Republic",
        capital: "Bangui",
        region: "Central Africa",
        population: "5,742,315",
        languageSpoken: "French, Sango",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Fufu, Cassava leaves, Poulet à la moambe, Babenda",
        description: "Known for rainforests, diamonds, political instability.",
        flag: "./img/Central_African_Republic.png",
      },
      {
        name: "Chad",
        capital: "N'Djamena",
        region: "Central Africa",
        population: "18,278,568",
        languageSpoken: "French, Arabic",
        religion: "Islam (predominantly Sunni Muslim), Christianity",
        stapleFood: "Millet, Couscous, Skoudehkaris, Boule",
        description: "Known for Lake Chad, Sahara Desert, diverse ethnic groups.",
        flag: "./img/Chad.png",
      },
      {
        name: "Comoros",
        capital: "Moroni",
        region: "East Africa",
        population: "852,075",
        languageSpoken: "Comorian, French, Arabic",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Langouste à la vanille, Langouste grillée, Ntsama",
        description: "Known for volcanic islands, vanilla production, marine biodiversity.",
        flag: "./img/Comoros.png",
      },
      {
        name: "Congo",
        capital: "Brazzaville",
        region: "Central Africa",
        population: "6,106,869",
        languageSpoken: "French (official), Lingala, Kituba",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Foufou, Moambe, Liboke, Saka-saka",
        description: "Known for rainforests, Congo River, oil production.",
        flag: "./img/Republic_of_Congo.png",
      },
      {
        name: "Democratic Republic of the Congo",
        capital: "Kinshasa",
        region: "Central Africa",
        population: "102,262,808",
        languageSpoken: "French (official), Lingala, Kiswahili, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Foufou, Pondu, Samaké, Fumbwa",
        description: "Known for Congo Basin, Virunga National Park, mineral wealth.",
        flag: "./img/Democratic_Republic_of_Congo.png",
      },
      {
        name: "Djibouti",
        capital: "Djibouti City",
        region: "East Africa",
        population: "1,136,455",
        languageSpoken: "French, Arabic (official), Somali, Afar",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Injera, Cambaboor, Lahoh, Foule",
        description: "Known for strategic location, salt lakes, diverse culture.",
        flag: "./img/Djibouti.png",
      },
      {
        name: "Egypt",
        capital: "Cairo",
        region: "North Africa",
        population: "112,716,598",
        languageSpoken: "Arabic (official)",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Koshari, Ful medames, Ta'meya, Molokhia",
        description: "Known for ancient civilization, pyramids, Nile River.",
        flag: "./img/Egypt.png",
      },
      {
        name: "Equatorial Guinea",
        capital: "Malabo (political), Bata (economic)",
        region: "Central Africa",
        population: "1,714,671",
        languageSpoken: "Spanish, French, Portuguese",
        religion: "Christianity (predominantly Roman Catholicism), Indigenous beliefs",
        stapleFood: "Ndole, Sipopo, Chicken Muamba, Cassava Leaf Soup",
        description: "Known for oil production, biologically diverse rainforests.",
        flag: "./img/Equatorial_Guinea.png",
      },
      {
        name: "Eritrea",
        capital: "Asmara",
        region: "East Africa",
        population: "3,748,901",
        languageSpoken: "Tigrinya, Arabic (official), English",
        religion: "Christianity (predominantly Orthodox Christianity, Islam",
        stapleFood: "Injera, Zigni, Kitcha fit-fit, Shiro",
        description: "Known for diverse culture, Red Sea coastline, coffee production.",
        flag: "./img/Eritrea.png",
      },
      {
        name: "Eswatini",
        capital: "Mbabane (administrative), Lobamba (royal and legislative)",
        region: "Southern Africa",
        population: "1,210,822",
        languageSpoken: "Swati, English",
        religion: "Christianity (predominantly Protestantism), Indigenous beliefs",
        stapleFood: "Uphuthu, Sishwala, Emasi, Mantlweni",
        description: "Known for monarchy, traditional ceremonies, wildlife reserves.",
        flag: "./img/Eswatini.png",
      },
      {
        name: "Ethiopia",
        capital: "Addis Ababa",
        region: "East Africa",
        population: "126,527,060",
        languageSpoken: "Amharic (official), Oromo, Tigrinya, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Injera, Doro Wat, Tibs, Kitfo",
        description: "Known for ancient history, coffee, diverse landscapes.",
        flag: "./img/Ethiopia.png",
      },
      {
        name: "Gabon",
        capital: "Libreville",
        region: "Central Africa",
        population: "2,436,566",
        languageSpoken: "French (official), Fang, Myene, others",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Poulet Nyembwe, Fufu, Atanga, Kebabs",
        description: "Known for rainforests, wildlife, oil reserves.",
        flag: "./img/Gabon.png",
      },
      {
        name: "Gambia",
        capital: "Banjul",
        region: "West Africa",
        population: "2,773,168",
        languageSpoken: "English",
        religion: "Islam, Christianity",
        stapleFood: "Benachin, Domoda, Yassa, Mbahal",
        description: "Known for Gambia River, birdwatching, vibrant culture.",
        flag: "./img/Gambia.png",
      },
      {
        name: "Ghana",
        capital: "Accra",
        region: "West Africa",
        population: "34,121,985",
        languageSpoken: "English (official), Akan, Ewe, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Banku, Jollof rice, Fufu, Kelewele",
        description: "Known for gold coast, Ashanti Empire, cocoa production.",
        flag: "./img/Ghana.png",
      },
      {
        name: "Guinea",
        capital: "Conakry",
        region: "West Africa",
        population: "14,190,612",
        languageSpoken: "French (official), others",
        religion: "Islam, Christianity, Indigenous beliefs",
        stapleFood: "Plasas, Yassa, Domoda, Fouti",
        description: "Known for bauxite, rainforests, ethnic diversity.",
        flag: "./img/Guinea.png",
      },
      {
        name: "Guinea-Bissau",
        capital: "Bissau",
        region: "West Africa",
        population: "2,150,842",
        languageSpoken: "Portuguese (official), others",
        religion: "Islam, Christianity, Indigenous beliefs",
        stapleFood: "Jollof rice, Caldo de Mancarra, Sossego, Chabu",
        description: "Known for Bijagós archipelago, cashew nuts, colonial history.",
        flag: "./img/Guinea-Bissau.png",
      },
      {
        name: "Ivory Coast",
        capital: "Yamoussoukro (political), Abidjan (economic)",
        region: "West Africa",
        population: "28,873,034",
        languageSpoken: "French (official), others",
        religion: "Islam, Christianity, Indigenous beliefs",
        stapleFood: "Attieke, Alloco, Kedjenou, Foutou",
        description: "Known for cocoa production, Basilica of Our Lady of Peace, political instability.",
        flag: "./img/Ivory_Coast.png",
      },
      {
        name: "Kenya",
        capital: "Nairobi",
        region: "East Africa",
        population: "55,100,586",
        languageSpoken: "Swahili, English (official), others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Ugali, Nyama Choma, Chapati, Sukuma Wiki",
        description: "Known for Maasai Mara, Mount Kenya, wildlife safaris.",
        flag: "./img/Kenya.png",
      },
      {
        name: "Lesotho",
        capital: "Maseru",
        region: "Southern Africa",
        population: "2,330,318",
        languageSpoken: "Sesotho, English",
        religion: "Christianity",
        stapleFood: "Papa, Moroho, Lentil Soup, Seswaa",
        description: "Known for mountain kingdom, traditional culture, blankets.",
        flag: "./img/Lesotho.png",
      },
      {
        name: "Liberia",
        capital: "Monrovia",
        region: "West Africa",
        population: "5,418,377",
        languageSpoken: "English",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Fufu, Jollof rice, Palava sauce, Potato greens",
        description: "Known for founding by freed American slaves, rubber production, civil war.",
        flag: "./img/Liberia.png",
      },
      {
        name: "Libya",
        capital: "Tripoli",
        region: "North Africa",
        population: "6,888,388",
        languageSpoken: "Arabic",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Couscous, Bazeen, Shakshuka, Bureek",
        description: "Known for Sahara Desert, ancient ruins, oil reserves.",
        flag: "./img/Libya.png",
      },
      {
        name: "Madagascar",
        capital: "Antananarivo",
        region: "East Africa",
        population: "30,325,732",
        languageSpoken: "Malagasy, French",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Ravitoto, Romazava, Akoho sy voanio, Lasary",
        description: "Known for unique biodiversity, lemurs, Baobab trees.",
        flag: "./img/Madagascar.png",
      },
      {
        name: "Malawi",
        capital: "Lilongwe",
        region: "Southern Africa",
        population: "20,931,751",
        languageSpoken: "Chichewa, English",
        religion: "Christianity",
        stapleFood: "Nsima, Chambo, Ndiwo, Mkhwani",
        description: "Known for Lake Malawi, Nyika Plateau, friendly people.",
        flag: "./img/Malawi.png",
      },
      {
        name: "Mali",
        capital: "Bamako",
        region: "West Africa",
        population: "23,293,698",
        languageSpoken: "French (official), Bambara, others",
        religion: "Islam, Indigenous beliefs",
        stapleFood: "Toh, Jollof rice, Fufu, Maafe",
        description: "Known for Timbuktu, Mali Empire, mud-brick architecture.",
        flag: "./img/Mali.png",
      },
      {
        name: "Mauritania",
        capital: "Nouakchott",
        region: "West Africa",
        population: "4,862,989",
        languageSpoken: "Arabic (official), French, others",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Thieboudienne, Couscous, Mbakhal, Chekchouka",
        description: "Known for Sahara Desert, ancient cities, iron ore reserves.",
        flag: "./img/Mauritania.png",
      },
      {
        name: "Mauritius",
        capital: "Port Louis",
        region: "East Africa",
        population: "1,300,557",
        languageSpoken: "English (official), French, Mauritian Creole",
        religion: "Hinduism, Christianity, Islam",
        stapleFood: "Dholl puri, Boulettes, Mine frites, Briani",
        description: "Known for beaches, coral reefs, multicultural society.",
        flag: "./img/Mauritius-.png",
      },
      {
        name: "Morocco",
        capital: "Rabat (political), Casablanca (economic)",
        region: "North Africa",
        population: "37,840,044",
        languageSpoken: "Arabic, Berber (official), French",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Couscous, Tagine, Pastilla, Harira",
        description: "Known for Atlas Mountains, Sahara Desert, Marrakesh medina.",
        flag: "./img/Morocco.png",
      },
      {
        name: "Mozambique",
        capital: "Maputo",
        region: "Southern Africa",
        population: "33,897,354",
        languageSpoken: "Portuguese (official), others",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Matapa, Piri-piri chicken, Xima, Frango à cafrial",
        description: "Known for Indian Ocean coastline, Gorongosa National Park, cashew nuts.",
        flag: "./img/Mozambique.png",
      },
      {
        name: "Namibia",
        capital: "Windhoek",
        region: "Southern Africa",
        population: "2,604,172",
        languageSpoken: "English (official), Afrikaans, others",
        religion: "Christianity",
        stapleFood: "Biltong, Kapana, Mopane worms, Potjiekos",
        description: "Known for Namib Desert, Etosha National Park, indigenous tribes.",
        flag: "./img/Namibia.png",
      },
      {
        name: "Niger",
        capital: "Niamey",
        region: "West Africa",
        population: "27,202,843",
        languageSpoken: "French (official), Hausa, others",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Rice, Millet, Couscous, Fufu",
        description: "Known for Sahara Desert, River Niger, uranium reserves.",
        flag: "./img/Niger.png",
      },
      {
        name: "Nigeria",
        capital: "Abuja",
        region: "West Africa",
        population: "223,804,632",
        languageSpoken: "English (official), Hausa, Yoruba, Igbo, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Jollof rice, Pounded yam, Egusi soup, Suya",
        description: "Known for Nollywood, oil production, diverse cultures.",
        flag: "./img/Nigeria.png",
      },
      {
        name: "Rwanda",
        capital: "Kigali",
        region: "East Africa",
        population: "14,094,683",
        languageSpoken: "Kinyarwanda, English, French",
        religion: "Christianity",
        stapleFood: "Ugali, Brochette, Isombe, Ibihaza",
        description: "Known for recovery from genocide, mountain gorillas, cleanliness.",
        flag: "./img/Rwanda.png",
      },
      {
        name: "São Tomé and Príncipe",
        capital: "São Tomé",
        region: "Central Africa",
        population: "231,856",
        languageSpoken: "Portuguese",
        religion: "Christianity",
        stapleFood: "Calulu, Muceque, Angu, Canjica",
        description: "Known for cocoa production, pristine beaches, tropical rainforests.",
        flag: "./img/SaoTome.png",
      },
      {
        name: "Senegal",
        capital: "Dakar",
        region: "West Africa",
        population: "17,763,163",
        languageSpoken: "French (official), Wolof, others",
        religion: "Islam, Christianity",
        stapleFood: "Thieboudienne, Yassa, Mafe, Fataya",
        description: "Known for vibrant music scene, colonial architecture, hospitality.",
        flag: "./img/Senegal.png",
      },
      {
        name: "Seychelles",
        capital: "Victoria",
        region: "East Africa",
        population: "107,660",
        languageSpoken: "Seychellois Creole, English, French",
        religion: "Christianity",
        stapleFood: "Octopus curry, Coconut fish curry, Ladob, Kat-kat banane",
        description: "Known for pristine beaches, coral reefs, luxury tourism.",
        flag: "./img/Seychelles.png",
      },
      {
        name: "Sierra Leone",
        capital: "Freetown",
        region: "West Africa",
        population: "8,791,092",
        languageSpoken: "English (official), Krio, others",
        religion: "Islam, Christianity, Indigenous beliefs",
        stapleFood: "Cassava leaves, Garri, Akara, Groundnut soup",
        description: "Known for diamonds, blood diamonds, history of civil war.",
        flag: "./img/Sierra_Leone.png",
      },
      {
        name: "Somalia",
        capital: "Mogadishu",
        region: "East Africa",
        population: "18,143,378",
        languageSpoken: "Somali (official), Arabic",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Anjero, Muqmad, Bariis, Canjeero",
        description: "Known for Horn of Africa, piracy, ongoing conflict.",
        flag: "./img/Somalia.png",
      },
      {
        name: "South Africa",
        capital: "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)",
        region: "Southern Africa",
        population: "60,414,495",
        languageSpoken: "Zulu, Xhosa, Afrikaans, English, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Braai (barbecue), Pap, Bobotie, Biltong",
        description: "Known for diverse landscapes, wildlife, Nelson Mandela.",
        flag: "./img/South_Africa.png",
      },
      {
        name: "South Sudan",
        capital: "Juba",
        region: "East Africa",
        population: "11,088,796",
        languageSpoken: "English (official), others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Kisra, Mulah, Kaparo, Ful",
        description: "Known for gaining independence from Sudan, ongoing conflict, Nile River.",
        flag: "./img/South_Sudan.png",
      },
      {
        name: "Sudan",
        capital: "Khartoum",
        region: "North Africa",
        population: "48,109,006",
        languageSpoken: "Arabic (official), English",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Ful medames, Kofta, Kisra, Mulah",
        description: "Known for Nile River, pyramids, Darfur conflict.",
        flag: "./img/Sudan.png",
      },
      {
        name: "Tanzania",
        capital: "Dodoma (official), Dar es Salaam (commercial)",
        region: "East Africa",
        population: "67,438,106",
        languageSpoken: "Swahili (official), English",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Ugali, Nyama Choma, Pilau, Chapati",
        description: "Known for Mount Kilimanjaro, Serengeti National Park, Zanzibar.",
        flag: "./img/Tanzania.png",
      },
      {
        name: "Togo",
        capital: "Lomé",
        region: "West Africa",
        population: "9,053,799",
        languageSpoken: "French (official), Ewe, Kabye, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Fufu, Koklo meme, Akume, Gboma dessi",
        description: "Known for Togolese cuisine, voodoo practices, Lomé beaches.",
        flag: "./img/Togo.png",
      },
      {
        name: "Tunisia",
        capital: "Tunis",
        region: "North Africa",
        population: "12,458,223",
        languageSpoken: "Arabic (official), French",
        religion: "Islam (predominantly Sunni Muslim)",
        stapleFood: "Couscous, Tajine, Brik, Lablabi",
        description: "Known for ancient ruins of Carthage, Mediterranean beaches, Arab Spring.",
        flag: "./img/Tunisia.png",
      },
      {
        name: "Uganda",
        capital: "Kampala",
        region: "East Africa",
        population: "48,582,334",
        languageSpoken: "English (official), Swahili, Luganda, others",
        religion: "Christianity, Islam, Indigenous beliefs",
        stapleFood: "Matooke, Rolex, Posho, Luwombo",
        description: "Known for Lake Victoria, mountain gorillas, Idi Amin regime.",
        flag: "./img/Uganda.png",
      },
      {
        name: "Zambia",
        capital: "Lusaka",
        region: "Southern Africa",
        population: "20,569,737",
        languageSpoken: "English (official), Bemba, Nyanja, Tonga, others",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Nshima, Ifisashi, Kapenta, Chibwabwa",
        description: "Known for Victoria Falls, Copperbelt Province, wildlife.",
        flag: "./img/Zambia.png",
      },
      {
        name: "Zimbabwe",
        capital: "Harare",
        region: "Southern Africa",
        population: "16,665,409",
        languageSpoken: "English (official), Shona, Sindebele, others",
        religion: "Christianity, Indigenous beliefs",
        stapleFood: "Sadza, Nyama, Mopane worms, Muriwo na nyama",
        description: "Known for Great Zimbabwe ruins, Victoria Falls, Robert Mugabe era.",
        flag: "./img/Zimbabwe.png",
      },

    
];
   

const countriesWrapper = document.querySelector(".countries-wrapper");

if (countries.length > 0) {
  countries.filter((country) => {
    if (country.region === "Southern Africa") {
      return (countriesWrapper.innerHTML += `
      <section class="countries">
          <div class="countryImg">
            <img src="${country.flag}" alt="SL Image" width="300px" />
          </div>
          <div>
            <h2>${country.name}</h2>
            <ul>
              <li>Population: ${country.population}</li>
              <li>region: ${country.region}</li>
              <li>Language Spoken: ${country.languageSpoken}</li>
              <li>Staple Food: ${country.stapleFood}</li>
              <li>Religion: ${country.religion}</li>
              <li>Description: ${country.description}</li>
            </ul>
          </div>
        </section>

      `);
    }
  });
}
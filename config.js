// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘
const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘

    // General
    name: 'Mia',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: true,

    // Theme
    changeThemeByOS: true,
    autoChangeTheme: true,

    // Greetings
    greetingMorning: 'Good morning!',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Go to Sleep!',

    // Weather
    weatherKey: '508f969bd84c0f4bb86ab0b8156b883d',
    weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'F', 'C'
    language: 'en', // More languages in https://openweathermap.org/current#multi

    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: 40.741895,
    defaultLongitude: -73.989308,

    // ┌─┐┌─┐┬─┐┌┬┐┌─┐
    // │  ├─┤├┬┘ ││└─┐
    // └─┘┴ ┴┴└──┴┘└─┘

    // Links
    cards: [
        {
            id: '1',
            name: 'Github',
            icon: 'github',
            link: 'https://github.com/',
        },
        {
            id: '2',
            name: 'Outlook',
            icon: 'mail',
            link: 'https://outlook.office.com/mail/',
        },
        {
            id: '3',
            name: 'Gmail',
            icon: 'mail',
            link: 'https://mail.google.com/mail/u/0/#inbox',
        },
        {
            id: '4',
            name: 'Canvas',
            icon: 'book',
            link: 'https://canvas.ewu.edu/calendar#view_name=month',
        },
        // {
        //   id: '5',
        //   name: 'Todoist',
        //   icon: 'trello',
        //   link: 'https://todoist.com',
        // },
        {
            id: '5',
            name: 'Leetcode',
            icon: 'code',
            link: 'https://www.leetcode.com/',
        },
        {
            id: '6',
            name: 'NCL',
            icon: 'shield',
            link: 'https://cyberskyline.com/events/ncl/dashboard/student',
        },
    ],

    // ┬  ┬┌─┐┌┬┐┌─┐
    // │  │└─┐ │ └─┐
    // ┴─┘┴└─┘ ┴ └─┘

    //Icons
    firstListIcon: 'book-open',
    secondListIcon: 'music',

    // Links
    lists: {
        firstList: [
            {
                name: 'CSCD467',
                link: 'https://canvas.ewu.edu/courses/1562310',
            },
            {
                name: 'CSCD202',
                link: 'https://canvas.ewu.edu/courses/1562249',
            },
            {
                name: 'CSCD490',
                link: 'https://canvas.ewu.edu/courses/1562317',
            },
            {
                name: 'CSCD490 repo',
                link: 'https://github.com/kaykay38/hrv-apple-watch-app',
            },
            {
                link: 'https://drive.google.com/drive/folders/1RtjXvRX0uOg_8MGetDzE-1dOASd2y8ar',
                name: 'CSCD490 Folder',
            },
        ],

        secondList: [
            {
                name: 'Chill Lofi Beats',
                link: 'https://www.youtube.com/watch?v=bmVKaAV_7-A', // "chill lofi beats to code/relax to - Joma Tech (YouTube)"
            },
            // {
            //     name: 'Lofi Hip Hop Radio',
            //     link: 'https://www.youtube.com/watch?v=5qap5aO4i9A', // "lofi hip hop radio"
            // },
            {
                name: 'Deep House',
                link: 'https://www.youtube.com/playlist?list=PLjzeyhEA84sTk9Ex6zQVTWfVlZv1wtoWe', // "Best Deep House Songs"
            },
            {
                name: 'Kaleo Mix',
                link: 'https://www.youtube.com/playlist?list=PL5XyW1U-dEyzEixqd1cKVMh6ngWGlzgvX', // "Kaleo Mix"
            },
            {
                name: 'K-Pop 2016-2021',
                link: 'https://www.youtube.com/playlist?list=PL7uwnIdTDGCz2x4_Ac3D0uESmDd6j2hbs', // "KPop 2016-2021"
            },
            {
                name: 'Instrumental Pop',
                link: 'https://www.youtube.com/playlist?list=PLsUMoyJKBqcn7dk3jC3i1023Ie-BntpgF', // "Instrumental Pop Covers"
            },
            // {
            //     name: 'Best of The Cranberries',
            //     link: 'https://www.youtube.com/playlist?list=PLWtysTkuEQDPfEJtInFvAU7zgMiYLXSRq', // "Best of The Cranberries"
            // },
            // {
            //     name: 'Left of the Dial',
            //     link: 'https://www.youtube.com/playlist?list=RDCLAK5uy_nRpAQskAphL8fHa_DFioLRJ5ddM6NZyF0', // "Left of the Dial"
            // },
            // {
            //     name: 'Pop Music 2021',
            //     link: 'https://www.youtube.com/playlist?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10', // "Pop Music 2021"
            // },
            // {
            //     name: 'The Best Soul Pop Folk',
            //     link: 'https://www.youtube.com/playlist?list=PLP7qsDncM-OQ65HpJ0GBLE8o6eAv3o4dL', // "The Best Soul Pop Folk"
            // },
            // {
            //     name: 'Leon Bridges Mix',
            //     link: 'https://www.youtube.com/playlist?list=PLKbTt3Ayv4Qu_j9C_wbuIKf9YQEpng5vz', // "Leon Bridges Mix"
            // },
            // {
            //     name: 'Peach Pit',
            //     link: 'https://www.youtube.com/playlist?list=PLswusE8BBvbdpXzwdXsm48msEreyJMYef', // "Peach Pit"
            // },
            // {
            //     name: 'Louise the Child',
            //     link: 'https://www.youtube.com/playlist?list=PLbZrodkh9HEzlx6vhIqsq-pQI0-9D_VzT', // "Louise the Child"
            // },
            // {
            //     name: 'MONSTA X',
            //     link: 'https://www.youtube.com/playlist?list=PLLsua0MU5Y8I4evYciNkWnb6RW6W-O35h', // "MONSTA X"
            // },
            // {
            //     name: 'Classic',
            //     link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            // },
            // {
            //     name: 'Oldies',
            //     link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            // },
            // {
            //     name: 'Rock',
            //     link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            // },
        ],
    },
};

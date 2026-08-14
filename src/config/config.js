const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Свадьба Ильи и Кати",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Илья",
    // Bride's name
    brideName: "Катя",
    // Groom's parents names
    parentGroom: "Bapak Groom & Ibu Groom",
    // Bride's parents names
    parentBride: "Bapak Bride & Ibu Bride",
    // Wedding date (format: YYYY-MM-DD)
    date: "2026-09-05",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/yLCqFATD4Zas7YZ36",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.3473953932976!2d34.54823904149345!3d53.18060325261272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4132a77212c5008f%3A0x1cecc21ea17fadf1!2z0JfQsNCz0L7RgNC-0LTQvdCw0Y8g0YDQtdC30LjQtNC10L3RhtC40Y8gItCR0L7RgCI!5e0!3m2!1sru!2sru!4v1786698983510!5m2!1sru!2sru",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "15:00 - 15:30",
    // Venue/building name

    // Full address of the wedding venue
    address: "ул. Воронцова, 15, посёлок Ковшовское Лесничество",
    // Image that appears when link is shared on social media
    ogImage: "",
    // Icon that appears in browser tab
    favicon: "/favicon.svg",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Свадьба",
        // Event date (format: YYYY-MM-DD)
        date: "2026-09-05",
        // Start time (format: HH:MM)
        startTime: "12:00",
        // End time (format: HH:MM)
        endTime: "23:00",
        // Event venue
        location: "Grand Ballroom, Hotel Majesty",
        // Full address
        address: "Jl. Jend. Sudirman No.1, Jakarta",
      },

      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      },
      // You can add more banks with the same format
    ],
  },
};

export default config;

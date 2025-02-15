let zodiacSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", 
    "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
//31size
    const compliments = [
        "You have a great sense of humor!",
        "Your positivity is contagious.",
        "You bring out the best in people.",
        "You have a fantastic smile!",
        "You're incredibly kind and thoughtful.",
        "Your creativity is inspiring.",
        "You have a heart of gold.",
        "You radiate confidence and charm.",
        "You're an amazing problem solver!",
        "You have a wonderful energy around you.",
        "Your intelligence shines through everything you do.",
        "You're a natural leader.",
        "Your enthusiasm is truly uplifting.",
        "You are a great listener.",
        "You always make people feel valued.",
        "Your kindness makes the world a better place.",
        "You're full of brilliant ideas!",
        "You have a unique and wonderful perspective.",
        "You're always so supportive and caring.",
        "You make difficult things look easy!",
        "Your laughter is the best kind of music.",
        "You're a beacon of positivity.",
        "You handle challenges with grace and strength.",
        "Your presence brightens up the room.",
        "You're an amazing friend.",
        "Your determination is truly admirable.",
        "You have an eye for beauty in everything.",
        "You're a fantastic storyteller.",
        "You inspire others to be their best selves.",
        "You make the world a better place just by being in it.",
        "Your kindness is a gift to everyone you meet."
    ];

//20size
    const victimMindsetPhrases = [
        "Nothing ever goes your way.",
        "People always take advantage of you.",
        "Life is so unfair to you.",
        "No one understands what you go through.",
        "Everyone is against you.",
        "You never get the credit you deserve.",
        "Bad things always happen to you.",
        "You can't catch a break.",
        "Nobody truly cares about you.",
        "You have the worst luck ever.",
        "People always let you down.",
        "You do everything for others, but no one does anything for you.",
        "It's always someone else’s fault.",
        "You're just not meant to be happy.",
        "People are constantly trying to bring you down.",
        "You never get the opportunities that others do.",
        "If only people knew how hard you have it.",
        "You're always the one who suffers.",
        "No one appreciates your struggles.",
        "Everything is harder for you than for anyone else."
    ];

    //31size
    const astrologyRecommendations = [
        "Set your intentions for the month based on the New Moon's energy.",
        "Check your daily horoscope and reflect on its message.",
        "Meditate with a crystal that aligns with your zodiac sign.",
        "Analyze your birth chart and explore a new aspect of it.",
        "Journal about how the current planetary transits are affecting you.",
        "Perform a manifestation ritual using candle magic.",
        "Read about the mythology behind your Sun, Moon, or Rising sign.",
        "Do a tarot or oracle card reading for guidance.",
        "Light incense or sage to cleanse your energy and home.",
        "Explore the traits of your Moon sign and how it affects your emotions.",
        "Look up the astrology of the day and plan accordingly.",
        "Find out which planets are retrograde and how they impact you.",
        "Listen to an astrology podcast or watch an educational video.",
        "Practice gratitude by listing things you love about your zodiac sign.",
        "Write down your dreams and analyze them based on planetary movements.",
        "Check the compatibility between your sign and someone else's.",
        "Wear colors or gemstones that align with your ruling planet.",
        "Make a vision board based on the qualities of your rising sign.",
        "Reflect on past experiences when the moon was in your sign.",
        "Experiment with moon water charging for spiritual purposes.",
        "Create a playlist that matches the energy of your zodiac element (Fire, Earth, Air, Water).",
        "Practice affirmations that align with your personal astrology.",
        "Look into the meaning of your Midheaven sign for career guidance.",
        "Find out what your North Node says about your life purpose.",
        "Track the moon phase and how it affects your mood and energy.",
        "Check which house the Sun is transiting in your birth chart today.",
        "Try a grounding exercise to balance your elemental energy.",
        "Explore your Venus sign and how it influences your relationships.",
        "Do a guided meditation focused on planetary energy.",
        "Look at your past and future transits to understand life patterns.",
        "Set a goal based on the energy of the current zodiac season."
    ];
//20size
    const futurePredictions = [
        "You will achieve great financial success and abundance.",
        "A new opportunity will bring unexpected happiness into your life.",
        "Love is on the horizon—prepare for a meaningful connection.",
        "Your hard work will soon pay off in ways you never imagined.",
        "A sudden change will lead you toward your true destiny.",
        "You will receive recognition for your talents and efforts.",
        "A dream you’ve held onto for years will finally come true.",
        "Luck will favor you in an unexpected way very soon.",
        "You will travel to a place that changes your perspective on life.",
        "Your intuition will guide you toward a life-changing decision.",
        "A financial breakthrough is coming—prosperity is in your future.",
        "You will meet someone who will have a profound impact on your life.",
        "An exciting career opportunity will present itself soon.",
        "Your creativity will lead to a major success or breakthrough.",
        "You will overcome an obstacle and emerge stronger than ever.",
        "A long-awaited wish is about to manifest in your life.",
        "Your health and energy will improve, bringing a new sense of vitality.",
        "You will soon celebrate a joyful and unexpected event.",
        "A powerful transformation is coming—embrace the change.",
        "Happiness, wealth, and love will align for you in the near future."
    ];
    
    
    const form = document.getElementById("astroForm");
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const date = Number(document.getElementById('date').value);
        const month = Number(document.getElementById('month').value);
        const year = Number(document.getElementById('year').value);
    
        const result = document.getElementById('result');
        const first_message = `Hello ${name} ${surname}`;
        const second_message = `Your Zodiac sign is ${zodiacSigns[month - 1]}`;
        
    
        const third_message = compliments[date - 1];
    
        let index = Math.floor(Math.random() * 20);
        const fourth_message = victimMindsetPhrases[index];
    
      
        index = (name.length * surname.length * year) % 30;
        const fifth_message = astrologyRecommendations[index];
    
        index = (date * month * year) % 20;
        const sixth_message = futurePredictions[index];
    
        result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our recommendation for you: ${fifth_message} Your future prediction: ${sixth_message}`;
    });
    





// document.getElementById("astroForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let name = document.getElementById("name").value;
//     let surname = document.getElementById("surname").value;
//     let date = document.getElementById("date").value;
//     let month = document.getElementById("month").value;
//     let year = document.getElementById("year").value;
    
//     let zodiacSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
//     let zodiacDates = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
    
//     let zodiacIndex = (date > zodiacDates[month - 1]) ? month : month - 1;
//     if (zodiacIndex < 0) zodiacIndex = 11;
    
//     let zodiac = zodiacSigns[zodiacIndex];
    
//     document.getElementById("result").innerText = `Hello ${name} ${surname}, your zodiac sign is ${zodiac}.`;
// });
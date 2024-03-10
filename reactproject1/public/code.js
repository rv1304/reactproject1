const bookmark = document.getElementById("bookmark");
const text = document.getElementById("h1");
let newQuote = ""; // Declare newQuote variable outside the click event listener
let quotes1 = ""; // Declare quotes1 outside the click event listener
let author1 = ""; // Declare author1 outside the click event listener

document.querySelector(".button").addEventListener("click", function () {
    const textElement = document.getElementById("text");
    textElement.classList.add("blur-animation");
    text.classList.add("blur-animation");

    const number = Math.floor(Math.random() * quotes.length);
    const quote = quotes[number];
    author1 = `${quote.author}`;
    quotes1 = `${quote.quote}`;
    newQuote = quotes1 + "-- " + author1; // Remove the 'let' keyword to update the outer variable

    document.getElementById("text").innerHTML = newQuote;
    console.log(newQuote);

    setTimeout(function () {
        // Remove the blur class after 2 seconds
        textElement.classList.remove("blur-animation");
        text.classList.remove("blur-animation");
    }, 1000);
});

const array = [];

document.querySelector(".bookmark").addEventListener("click", function () {
    if (newQuote.trim() !== "") {
        const formattedQuote = { quote: quotes1, author: author1 };
        console.log(formattedQuote);
        array.push(formattedQuote);
        localStorage.setItem('array', JSON.stringify(array));

        console.log(array);
        alert("Bookmark Added");
    } else {
        console.error("Quote not found.");
    }
});

export default array;


// Assuming 'shareBtn' is correctly selected and defined
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            text: newQuote,
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((err) => console.error(err));
    } else {
        alert("The current browser does not support the share function. Please, manually share the link");
    }
});






const quotes = [
    {
        quote: "You must do the thing you think you cannot do.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Happiness is not a goal; it is a by-product.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Friendship with oneself is all-important because without it, one cannot be friends with anyone else.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "A woman is like a tea bag you never know how strong she is until she gets in hot water.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
    },
    {
        quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        author: "Steve Jobs",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
    },
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
    },
    {
        quote: "I want to put a ding in the universe.",
        author: "Steve Jobs",
    },
    {
        quote: "Innovation comes from people meeting up in the hallways or calling each other at 10:30 at night with a new idea, or because they realized something that shoots holes in how we've been thinking about a problem.",
        author: "Steve Jobs",
    },
    {
        quote: "The people who are doing the work are the moving force behind the Macintosh. My job is to create a space for them, to clear out the rest of the organization and keep it at bay.",
        author: "Steve Jobs",
    },
    {
        quote: "The first and greatest victory is to conquer yourself.",
        author: "Plato",
    },
    {
        quote: "At the touch of love, everyone becomes a poet.",
        author: "Plato",
    },
    {
        quote: "Ignorance, the root and stem of all evil.",
        author: "Plato",
    },
    {
        quote: "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.",
        author: "Plato",
    },
    {
        quote: "Wise men speak because they have something to say; fools because they have to say something.",
        author: "Plato",
    },
    {
        quote: "Courage is knowing what not to fear.",
        author: "Plato",
    },
    {
        quote: "Justice means minding your own business and not meddling with other men's concerns.",
        author: "Plato",
    },
    {
        quote: "The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.",
        author: "Plato",
    },
    {
        quote: "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers.",
        author: "Plato",
    },
    {
        quote: "The measure of a man is what he does with power.",
        author: "Plato",
    },
    {
        quote: "The direction in which education starts a man will determine his future in life.",
        author: "Plato",
    },
    {
        quote: "At the touch of love, everyone becomes a poet.",
        author: "Plato",
    },
    {
        quote: "The just man is happy, and the unjust man is miserable.",
        author: "Plato",
    },
    {
        quote: "Philosophy begins in wonder.",
        author: "Plato",
    },
    {
        quote: "Beauty of style and harmony and grace and good rhythm depend on simplicity.",
        author: "Plato",
    },
    {
        quote: "Float like a butterfly, sting like a bee.",
        author: "Muhammad Ali",
    },
    {
        quote: "I'm not the greatest, I'm the double greatest. Not only do I knock 'em out, I pick the round.",
        author: "Muhammad Ali",
    },
    {
        quote: "Service to others is the rent you pay for your room here on Earth.",
        author: "Muhammad Ali",
    },
    {
        quote: "It's hard to be humble when you're as great as I am.",
        author: "Muhammad Ali",
    },
    {
        quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
        author: "Muhammad Ali",
    },
    {
        quote: "I am the greatest. I said that even before I knew I was.",
        author: "Muhammad Ali",
    },
    {
        quote: "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
        author: "Muhammad Ali",
    },
    {
        quote: "Don't count the days; make the days count.",
        author: "Muhammad Ali",
    },
    {
        quote: "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it.",
        author: "Muhammad Ali",
    },
    {
        quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
        author: "Muhammad Ali",
    },
    {
        quote: "Live every day as if it were your last because someday you're going to be right.",
        author: "Muhammad Ali",
    },
    {
        quote: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
        author: "Muhammad Ali",
    },
    {
        quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "We must accept finite disappointment, but never lose infinite hope.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "I believe that unarmed truth and unconditional love will have the final word in reality. This is why right, temporarily defeated, is stronger than evil triumphant.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The arc of the moral universe is long, but it bends toward justice.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Faith is taking the first step even when you don't see the whole staircase.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "Let no man pull you so low as to hate him.",
        author: "Martin Luther King Jr.",
    },
    {
        quote: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The question I ask myself like almost every day is, 'Am I doing the most important thing I could be doing?'",
        author: "Mark Zuckerberg",
    },
    {
        quote: "People can be really smart or have skills that are directly applicable, but if they don't really believe in it, then they are not going to really work hard.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The Hacker Way is an approach to building that involves continuous improvement and iteration.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The thing that we are trying to do at Facebook is just help people connect and communicate more efficiently.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "By giving people the power to share, we're making the world more transparent.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The companies that work are the ones that people really care about and have a vision for the world, so do something you like.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "We don't build services to make money; we make money to build better services.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "Simply put: we don't build services to make money; we make money to build better services.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        author: "Helen Keller",
    },
    {
        quote: "The only thing worse than being blind is having sight but no vision.",
        author: "Helen Keller",
    },
    {
        quote: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
        author: "Helen Keller",
    },
    {
        quote: "The highest result of education is tolerance.",
        author: "Helen Keller",
    },
    {
        quote: "We could never learn to be brave and patient if there were only joy in the world.",
        author: "Helen Keller",
    },
    {
        quote: "Alone we can do so little; together we can do so much.",
        author: "Helen Keller",
    },
    {
        quote: "I long to accomplish a great and noble task, but it is my chief duty to accomplish small tasks as if they were great and noble.",
        author: "Helen Keller",
    },
    {
        quote: "The world is full of suffering, but it is also full of the overcoming of it.",
        author: "Helen Keller",
    },
    {
        quote: "You cannot step into the same river twice.",
        author: "Heraclitus",
    },
    {
        quote: "Everything flows, nothing stands still.",
        author: "Heraclitus",
    },
    {
        quote: "Character is destiny.",
        author: "Heraclitus",
    },
    {
        quote: "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
        author: "Heraclitus",
    },
    {
        quote: "War is the father of all things.",
        author: "Heraclitus",
    },
    {
        quote: "Everything changes and nothing remains still.",
        author: "Heraclitus",
    },
    {
        quote: "The only constant in life is change.",
        author: "Heraclitus",
    },
    {
        quote: "Out of every one hundred men, ten shouldn't even be there, eighty are just targets, nine are the real fighters, and we are lucky to have them, for they make the battle. Ah, but the one, one is a warrior, and he will bring the others back.",
        author: "Heraclitus",
    },
    {
        quote: "Nature loves to hide.",
        author: "Heraclitus",
    },
    {
        quote: "Eyes and ears are bad witnesses to men if they have barbarian souls.",
        author: "Heraclitus",
    },
    {
        quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        author: "Nelson Mandela",
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
        author: "Nelson Mandela",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.",
        author: "Nelson Mandela",
    },
    {
        quote: "A good head and a good heart are always a formidable combination.",
        author: "Nelson Mandela",
    },
    {
        quote: "Resentment is like drinking poison and then hoping it will kill your enemies.",
        author: "Nelson Mandela",
    },
    {
        quote: "I dream of an Africa which is in peace with itself.",
        author: "Nelson Mandela",
    },
    {
        quote: "Real leaders must be ready to sacrifice all for the freedom of their people.",
        author: "Nelson Mandela",
    },
    {
        quote: "The only ones among you who will be really happy are those who will have sought and found how to serve.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Do something wonderful, people may imitate it.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Reverence for life affords me my fundamental principle of morality.",
        author: "Albert Schweitzer",
    },
    {
        quote: "The purpose of human life is to serve, and to show compassion and the will to help others.",
        author: "Albert Schweitzer",
    },
    {
        quote: "The true worth of a man is not to be found in man himself, but in the colors and textures that come alive in others.",
        author: "Albert Schweitzer",
    },
    {
        quote: "I don't know what your destiny will be, but one thing I know: the only ones among you who will be really happy are those who will have sought and found how to serve.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Ethics is nothing else than reverence for life.",
        author: "Albert Schweitzer",
    },
    {
        quote: "The human spirit is not dead. It lives on in secret... It has come to believe that compassion, in which all ethics must take root, can only attain its full breadth and depth if it embraces all living creatures and does not limit itself to mankind.",
        author: "Albert Schweitzer",
    },
    {
        quote: "We must fight against the spirit of unconscious cruelty with which we treat the animals. Animals suffer as much as we do. True humanity does not allow us to impose such sufferings on them. It is our duty to make the whole world recognize it. Until we extend our circle of compassion to all living things, humanity will not find peace.",
        author: "Albert Schweitzer",
    },
    {
        quote: "In everyone's life, at some time, our inner fire goes out. It is then burst into flame by an encounter with another human being. We should all be thankful for those people who rekindle the inner spirit.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Imagination is more important than knowledge.",
        author: "Albert Einstein",
    },
    {
        quote: "The only source of knowledge is experience.",
        author: "Albert Einstein",
    },
    {
        quote: "The true sign of intelligence is not knowledge but imagination.",
        author: "Albert Einstein",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        author: "Albert Einstein",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "The only thing that interferes with my learning is my education.",
        author: "Albert Einstein",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "Logic will get you from A to B. Imagination will take you everywhere.",
        author: "Albert Einstein",
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein",
    },
    {
        quote: "Education is not the learning of facts, but the training of the mind to think.",
        author: "Albert Einstein",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
    {
        quote: "Don't let the noise of others' opinions drown out your own inner voice.",
        author: "Steve Jobs",
    },
    {
        quote: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.",
        author: "Steve Jobs",
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
    },
    {
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs",
    },
    {
        quote: "I want to put a ding in the universe.",
        author: "Steve Jobs",
    },
    {
        quote: "The people who are doing the work are the moving force behind the Macintosh. My job is to create a space for them, to clear out the rest of the organization and keep it at bay.",
        author: "Steve Jobs",
    },
    {
        quote: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
        author: "Bill Gates",
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
    },
    {
        quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
        author: "Bill Gates",
    },
    {
        quote: "To win big, you sometimes have to take big risks.",
        author: "Bill Gates",
    },
    {
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        author: "Bill Gates",
    },
    {
        quote: "We make the future sustainable when we invest in the poor, not when we insist on their suffering.",
        author: "Bill Gates",
    },
    {
        quote: "If you are born poor it's not your mistake, but if you die poor it's your mistake.",
        author: "Bill Gates",
    },
    {
        quote: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
        author: "Bill Gates",
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
    },
    {
        quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction.",
        author: "Bill Gates",
    },
    {
        quote: "To win big, you sometimes have to take big risks.",
        author: "Bill Gates",
    },
    {
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        author: "Bill Gates",
    },
    {
        quote: "We make the future sustainable when we invest in the poor, not when we insist on their suffering.",
        author: "Bill Gates",
    },
    {
        quote: "If you are born poor it's not your mistake, but if you die poor it's your mistake.",
        author: "Bill Gates",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Happiness is not a goal; it is a by-product.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Friendship with oneself is all-important because without it, one cannot be friends with anyone else.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "A woman is like a tea bag you never know how strong she is until she gets in hot water.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        author: "Eleanor Roosevelt",
    }
];
// JavaScript source code
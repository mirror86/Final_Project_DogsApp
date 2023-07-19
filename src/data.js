
export const allQuestions = {
    energy: "I am active and would like to have a very active dog",
    barking: "I don't mind a dog barking at all",
    shedding: "A lot of falling hair is not a problem",
    trainability: "I would love a smart and fast learning dog",
    protectiveness: "I don't like dogs that react badly to strangers",
    good_with_children: "The dog must fully accept children",
    good_with_other_dogs:"The dog must fully accept other dogs"
}
export const dogHeightPreferences = {
    large: {
        label: "The bigger the better",
        heightRange: {
            min_height_male: 20,
            max_height_male: 50,
        },
    },
    medium: {
        label: "I like medium dogs",
        heightRange: {
            min_height_male: 10,
            max_height_male: 35,
        },
    },
    small: {
        label: "I love little dogs",
        heightRange: {
            min_height_male: 0,
            max_height_male: 15,
        },
    },
    notMatter: {
        label: "Size doesn't matter",
        heightRange: {
            min_height_male: 0,
            max_height_male: 0,
        },
    },
};

export const dogWeightPreferences = {
    skinny: {
        label:  "The skinny type",
        weightRange: {
            min_weight_male: 2,
            max_weight_male: 100,
        },
    },
    brawler: {
        label:  "Brawler type",
        weightRange: {
            min_weight_male: 50,
            max_weight_male: 300,
        },
    },
    notMatter: {
        label: "Doesn't matter",
        weightRange: {
            min_weight_male: 0,
            max_weight_male: 0,
        },
    },
};

export const apiUrl = "https://api.api-ninjas.com/v1/dogs?";
export const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";

export const labelValues = {
    0: "Not important",
    1: "It doesn't fit at all",
    2: "It doesn't quite fit",
    3: "It fits a bit",
    4: "It fits well",
    5: "It fits perfectly!"
}


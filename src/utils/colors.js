export const sphereColor = (sphere) => {
    const dataSphere = {
        health_and_sports: {
            color: 'rgb(255, 168, 118)',
            bg: 'rgb(255, 168, 118, 0.1)',
        },
        business_and_career: {
            color: 'rgb(100, 189, 255)',
            bg: 'rgb(100, 189, 255, 0.1)',
        },
        family_and_love: {
            color: 'rgb(185, 126, 255)',
            bg: 'rgb(185, 126, 255, 0.1)',
        },
        personal_growth: {
            color: 'rgb(251, 246, 129)',
            bg: 'rgb(251, 246, 129, 0.2)',
        },
        investment: {
            color: 'rgb(129, 255, 179)',
            bg: 'rgb(129, 255, 179, 0.1)',
        },
        environment_and_friends: {
            color: 'rgb(254, 109, 109)',
            bg: 'rgb(254, 109, 109, 0.1)',
        },
        brightness_of_life: {
            color: 'rgb(105, 228, 255)',
            bg: 'rgb(105, 228, 255, 0.1)',
        },
        charity: {
            color: 'rgb(255, 113, 216)',
            bg: 'rgb(255, 113, 216, 0.1)',
        },
    };
    return dataSphere[sphere];
};

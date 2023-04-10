function findMatching(driverList, name) {
    return driverList.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(driverList, partialName) {
    return driverList.filter(driver => {
        const array = {value: true};
        for (const index in partialName) {
            if (partialName[index] === driver[index]) {
                array.value = true;
            } else {
                array.value = false;
                break;
            }
        }
        if (array.value) {
            return driver;
        }
    });
}

function matchName(driverList, nameInput) {
    return driverList.filter(driverObj => driverObj.name.toLowerCase() === nameInput.toLowerCase());
}

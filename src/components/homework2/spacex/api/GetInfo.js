export const getLaunchesData = () => {
    return fetch('https://api.spacexdata.com/v3/launches/').then(resp => resp.json());
}

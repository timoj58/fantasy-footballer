const HOST = 'https://kx3ncoorp1.execute-api.us-east-1.amazonaws.com/mobile';

export function get(url) {

console.log(url);

  return fetch(url, {
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
  })
    .then((response) => {
      if(response.status === 401 || response.status === 403){
        throw new Error('token');
      }

      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    });
}


export function competitions() {
  return get(HOST+'/competitions');
}

export function teams(competition){
  return get(HOST+'/teams?competition='+competition);
}

export function events(country, competition){
  return get(HOST+'/events?country='+country+'&competition='+competition);
}

export function players(team){
  return get(HOST+'/players?team='+team);
}

export function player(player){

}

export function topPicks(competition){

}

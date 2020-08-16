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

export function events(competition){
  return get(HOST+'/events?competition='+competition);
}

export function matchSelections(competition, home, away){
  return get(HOST+"/match-selections?competition="+competition+"&home="+home+"&away="+away);
}
export function topPicks(competition){
  return get(HOST+"/top-selections?competition="+competition);
}

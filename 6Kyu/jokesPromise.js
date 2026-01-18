async function sayJoke(apiUrl, jokeId){
  
  let data;
  try {
    const resp = await fetch(apiUrl);
    data = await resp.json();
  } catch{
    throw new Error(`No jokes at url: ${url}`);
  }

  if (!data?.jokes || !Array.isArray(data.jokes)) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  const joke = data.jokes.find(j => j.id === jokeId);
  if (!joke){
    throw new Error(`No jokes found id: ${jokeId}`)
  }
  
  
    return {
        saySetup () { return joke.setup; },
        sayPunchLine() { return joke.punchLine; }
    };
}

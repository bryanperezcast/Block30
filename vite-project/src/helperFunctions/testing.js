export default async function fetchPost() {
    const COHORT_NAME = `2302-acc-ct-web-pt-b`
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
        try {
          const response = await fetch(`${BASE_URL}/posts`)
      
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
}
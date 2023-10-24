const services = {
    async getData(url) {
      try {
        const res = await fetch(`${url}`);
        const database = await res.json();
        return { database };
      } catch (error) {
        console.log(error);
      }
    },
  
    async postData(url, data) {
      try {
        const res = await fetch(`${url}`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        });
        const database = await res.json();
        return { database };
      } catch (error) {
        console.log(error);
      }
    },
  
    async putData(url, data) {
      try {
        const res = await fetch(`${url}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        });
        const database = await res.json();
        return { database };
      } catch (error) {
        console.log(error);
      }
    },
  
    async deleteData(url) {
      try {
        const res = await fetch(`${url}`, {
          method: 'DELETE',
        });
        const database = await res.json();
        return { database };
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  export default services;  
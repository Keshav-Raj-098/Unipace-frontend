const total_jobs = (data) => {
    // const statuses = ['Applied', 'Shortlisted', 'Selected', 'Not Shortlisted', 'Not Selected'];
    let value = 0;

    data.forEach((e) => {
      if (e.status === "Not Applied") {
        value++;
      }
    });

    return value;
  };

  const applied_jobs = (data) => {
    const statuses =  ['Applied', 'Shortlisted', 'Selected', 'Not shortlisted', 'Not selected'];
    let value = 0;

    data.forEach((e) => {
      if (statuses.includes(e.status)) {
        value++;
      }
    });

    return value;
  };

  const jobs_data = (data,status) => {
   
    let value = 0;

    data.forEach((e) => {
      if (e.status===`${status}`) {
        value++;
      }
    });

    return value;
  };
  
  export {total_jobs,applied_jobs,jobs_data}
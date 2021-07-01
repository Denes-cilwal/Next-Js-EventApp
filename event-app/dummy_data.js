const DUMMY_EVENTS = [
    {
      eid: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-06-1',
      image: 'images/coding-event.jpg',
      isFeatured: true,
    },
    {
      eid: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-06-15',
      image: 'images/introvert-event.jpg',
      isFeatured: false,
    },
    {
      eid: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-06-30',
      image: 'images/network-event.jpg',
      isFeatured: true,
    },
  ];
  


  // Get featured Events ...
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }

  // Get All Events ...
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  // Get event by id ....
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.eid === id);
  }

  // Get Filtered Events ...
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
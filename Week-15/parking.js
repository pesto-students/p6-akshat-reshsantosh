const park = (capacity) => {
    if (!capacity) {
      console.log('Please provide a capacity');
      return;
    }
    
    let ticketCounter = 1;
    let parkedCars = [];
    
    return {
      issueTicket: (registrationNumber, color) => {
        if (parkedCars.length >= capacity) {
          console.log(`Parking lot is full.`);
          return;
        }
        
        let ticket = {
          ticketNumber: ticketCounter,
          registrationNumber: registrationNumber,
          color: color
        };
        parkedCars.push(ticket);
        console.log(`Ticket issued: ${ticketCounter}`);
        ticketCounter++;
      },
      
      leave: (ticketNumber) => {
        let index = -1;
        for (let i = 0; i < parkedCars.length; i++) {
          if (parkedCars[i].ticketNumber === ticketNumber) {
            index = i;
            break;
          }
        }
        
        if (index === -1) {
          console.log(`Ticket number ${ticketNumber} not found.`);
          return;
        }
        
        console.log(`Registration number ${parkedCars[index].registrationNumber} with ticket number ${ticketNumber} is free with color ${parkedCars[index].color}.`);
        parkedCars.splice(index, 1);
      }
    };
  };
  
  const parkingLot = park(2);
  
  const commands = [
    { command: 'issueTicket', registrationNumber: 'KA-01-HH-1234', color: 'White' },
    { command: 'issueTicket', registrationNumber: 'KA-01-HH-9999', color: 'White' },
    { command: 'issueTicket', registrationNumber: 'KA-01-BB-0001', color: 'Black' },
    { command: 'issueTicket', registrationNumber: 'KA-01-HH-7777', color: 'Red' },
    { command: 'leave', ticketNumber: 1 },
    { command: 'issueTicket', registrationNumber: 'KA-01-HH-2701', color: 'Blue' },
    { command: 'leave', ticketNumber: 2 },
    { command: 'leave', ticketNumber: 3 },
    { command: 'issueTicket', registrationNumber: 'KA-01-HH-3141', color: 'Black' }
  ];
  
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    switch (command.command) {
      case 'issueTicket':
        parkingLot.issueTicket(command.registrationNumber, command.color);
        break;
      case 'leave':
        parkingLot.leave(command.ticketNumber);
        break;
      default:
        console.log(`Invalid command: ${command.command}`);
    }
  }
  
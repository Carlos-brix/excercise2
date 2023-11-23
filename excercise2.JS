function checkOS(personName, os) {
  // comprobando si los parametros fueron ingresados en la función
  if (!personName || !os) {
    throw new Error("One or more values are missing.");
  }

  //comprobando si los parametros son strings
  if (typeof personName !== "string" || typeof os !== "string") {
    throw new Error(`Only string values are accepted, but received values are ${personName} and ${os}`);
  }

  os = os.trim().toLowerCase();

  
  console.log(`Hello ${personName}, you have provided ${os} as your operating system..`);

  
  if (os.includes("apple")) {
    console.log(`${personName} is using macOS.`);
  } else if (os.includes("windows")) {
    console.log(`${personName} is using Windows.`);
  } else {
    console.log(`${personName} is using other OS.`);
}
 }

 //checkOS("rob")
 //checkOS("rob", 123)
 checkOS("rob", "apple")
 //checkOS("Bob", "Windows")
 //checkOS("Jhon", "linux")




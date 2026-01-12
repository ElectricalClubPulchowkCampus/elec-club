import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: "", email: "", phonenumber: "", collegename:"", level:"", hopes: "", attendAllDays: "", paymentmethod:"", feedback:"", image:"" });
    const [isSending, setIsSending] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name); 
        }
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxZxv5RIu1MdPy4qZ5E7jqQiFxf01tlyEsmqTuEmCgQe165fUlAPkzRrNQ0JvQhrTpmqA/exec";
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phonenumber", formData.phonenumber);
    data.append("collegename", formData.collegename);
    data.append("level", formData.level);
    // data.append("faculty", formData.faculty);
    data.append("hopes", formData.hopes);
    data.append("attendalldays", formData.attendAllDays);
    // data.append("time", formData.time);
    data.append("paymentmethod", formData.paymentmethod);
    data.append("feedback", formData.feedback);

    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = async function(event) {
            const base64String = event.target.result; // Get base64 encoded data
            data.append("image", base64String);
            console.log("data[image] : ", data.get("image"));

            // Now make the fetch request after the image is appended
            try {
                const res = await fetch(scriptURL, {
                    method: "POST",
                    body: data,
                });

                const result = await res.json();

                if (result.success) {
                    toast.success("Message sent!");
                    // You can reset the form if needed
                    // setFormData({...}); 
                } else {
                    toast.error("Failed to submit the form.");
                }
            } catch (err) {
                console.error(err);
                toast.error("Something went wrong.");
            } finally {
                setIsSending(false);
            }
        };

        reader.readAsDataURL(file);
    } else {
        // If no image file is selected, just send the form without image
        try {
            const res = await fetch(scriptURL, {
                method: "POST",
                body: data,
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Message sent!");
            } else {
                toast.error("Failed to submit the form.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong.");
        } finally {
            setIsSending(false);
        }
    }
};


    const inputClassName =
        "border border-gray-400 rounded-md p-3 text-gray-700 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-[#5004a0]";
    const labelClassName =  "block text-md font-medium text-[#5004a0] mb-1"
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <main className="pt-24">
                <div className="flex flex-col items-center p-4">
                    <motion.div
                        className="text-5xl font-bold text-[#5004a0] text-center my-5 mb-8 flex flex-col md:w-[80%]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Registration Form : AutoCAD Electrical Workshop
                        <div className="text-base font-normal p-4 mt-4">
                            <div>Welcome to the registration form for AutoCAD Electrical Workshop organized by the Electrical Club, Pulchowk Campus in association with <strong>Line Academy</strong>.</div>                            
                            <br />
                            <div>📅 Date: 2nd to 6th of Magh</div>
                            <br />
                            <div>📍 Venue: DoEE, Pulchowk Campus</div>
                            <br />
                            <div>💸 Registration Fee: Rs. 250 (to be paid via eSewa/Siddhartha Bank Mobile Banking)</div>
                            <br />
                            <div>The Workshop Syllabus is included <a href="https://drive.google.com/file/d/1QjaQXVFSldBivUqqC-KWGKiWZ-CkYOpG/view" target="_blank"><strong><u>here</u></strong></a>.</div>
                            <br />
                            <div>✨ Fill in the form carefully and secure your seat for this exciting learning experience!</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="w-[90%] md:w-[80%] max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-[#5004a0]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.01 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >                
                        <form onSubmit={handleSubmit}>
                            <label className={labelClassName}>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Full Name"
                                className={inputClassName}
                                required
                            />

                            <label className={labelClassName}>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className={inputClassName}
                                required
                            />

                            <label className={labelClassName}>Phone Number *</label>
                            <input
                                type="tel"
                                name="phonenumber"
                                value={formData.phonenumber}
                                onChange={handleChange}
                                pattern="^\d{10}$"
                                placeholder="Enter Your Phone Number"
                                className={inputClassName}
                                required
                            />

                            <label className={labelClassName}>Your College Name *</label>
                            <input
                                type="text"
                                name="collegename"
                                value={formData.collegename}
                                onChange={handleChange}
                                placeholder="Your College Name"
                                className={inputClassName}
                                required
                            />

                            <label className={labelClassName}>Level *</label>
                            <select
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                className={inputClassName}
                                required
                            >
                                <option value="" disabled>Select Your Level</option>
                                <option value="1st sem">Bachelors 1st sem</option>
                                <option value="2nd sem">Bachelors 2nd sem</option>
                                <option value="3rd sem">Bachelors 3rd sem</option>
                                <option value="4th sem">Bachelors 4th sem</option>
                                <option value="5th sem">Bachelors 5th sem</option>
                                <option value="6th sem">Bachelors 6th sem</option>
                                <option value="7th sem">Bachelors 7th sem</option>
                                <option value="8th sem">Bachelors 8th sem</option>
                                <option value="other">Other</option>
                            </select>

                            {/* <label className={labelClassName}>Faculty *</label>
                            <select
                                name="faculty"
                                value={formData.faculty}
                                onChange={handleChange}
                                className={inputClassName}
                                required
                            >
                                <option value="" disabled>Select Your faculty</option>
                                <option value="Electrical">Bachelor of Electrical Engineering</option>
                                <option value="Electronics">Bachelor of Electronics, Information and Communication Engineering</option>
                                <option value="Computer">Bachelor of Computer Engineering</option>
                                <option value="Mechanical">Bachelor of Mechanical Engineering</option>
                                <option value="Aerospace">Bachelor of Aerospace Engineering</option>
                                <option value="Chemical">Bachelor of Chemical Engineering</option>
                                <option value="Civil">Bachelor of Civil Engineering</option>
                                <option value="Architecture">Bachelor of Architecture</option>
                                <option value="Physical">Physical Group (+2 Level)</option>
                                <option value="Biology">Biology Group (+2 level)</option>
                                <option value="other">Other</option>
                            </select> */}

                            <label className={labelClassName}>What do you hope to learn from this workshop?</label>
                            <textarea
                                name="hopes"
                                value={formData.hopes}
                                onChange={handleChange}
                                placeholder="Your text here..."
                                className={`${inputClassName} min-h-20 max-h-30 resize-y`}
                            />

                            <label className={labelClassName}>Are you willing to attend all five days of the workshop? *</label>
                                    <div className="flex space-x-6 mt-2 mb-4"> 
                                        <div className="flex items-center border border-transparent p-2 rounded-md transition-all">
                                            <input
                                                type="radio"
                                                id="attendYes"
                                                name="attendAllDays"
                                                value="yes"
                                                checked={formData.attendAllDays === 'yes'}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-[#5004a0] border-gray-300 focus:ring-[#5004a0] cursor-pointer"
                                                required
                                            />
                                            <label htmlFor="attendYes" className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer">Yes</label>
                                        </div>
                                        <div className="flex items-center border border-transparent p-2 rounded-md transition-all">
                                            <input
                                                type="radio"
                                                id="attendNo"
                                                name="attendAllDays"
                                                value="no"
                                                checked={formData.attendAllDays === 'no'}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-[#5004a0] border-gray-300 focus:ring-[#5004a0] cursor-pointer"
                                                required
                                            />
                                            <label htmlFor="attendNo" className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer">No</label>
                                        </div>
                                    </div>

                            {/* <label className={labelClassName}>What time is favorable for you? *</label>
                            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2 mb-4 space-y-2 sm:space-y-0"> 
                                <div className="flex items-center border border-transparent p-2 rounded-md transition-all">
                                    <input
                                        type="radio"
                                        id="timeMorning"
                                        name="time"
                                        value="morning"
                                        checked={formData.time === 'morning'}  
                                        onChange={handleChange}
                                        className="h-4 w-4 text-[#5004a0] border-gray-300 focus:ring-[#5004a0] cursor-pointer"
                                        required
                                    />
                                    <label htmlFor="timeMorning" className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer">7-9 AM (Morning Shift)</label>
                                </div>
                                <div className="flex items-center border border-transparent p-2 rounded-md transition-all">
                                    <input
                                        type="radio"
                                        id="timeDay"
                                        name="time"
                                        value="day"
                                        checked={formData.time === 'day'}  
                                        onChange={handleChange}
                                        className="h-4 w-4 text-[#5004a0] border-gray-300 focus:ring-[#5004a0] cursor-pointer"
                                        required
                                    />
                                    <label htmlFor="timeDay" className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer">1-3 PM (Day Shift)</label>
                                </div>
                                <div className="flex items-center border border-transparent p-2 rounded-md transition-all">
                                    <input
                                        type="radio"
                                        id="timeEvening"
                                        name="time"
                                        value="evening"
                                        checked={formData.time === 'evening'}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-[#5004a0] border-gray-300 focus:ring-[#5004a0] cursor-pointer"
                                        required
                                    />
                                    <label htmlFor="timeEvening" className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer">5-7 PM (Evening Shift)</label>
                                </div>
                            </div> */}

                            <label className={labelClassName}>Payment Method *</label>
                            <select
                                name="paymentmethod"
                                value={formData.paymentmethod}
                                onChange={handleChange}
                                className={inputClassName}
                                required
                            >
                                <option value="" disabled>Select Your Payment Method</option>
                                <option value="khalti">Khalti</option>
                                <option value="esewa">Esewa</option>
                                <option value="bank">Bank</option>
                            </select>
                            
                            <div className="flex flex-wrap justify-center gap-y-4 gap-x-2">
                                    {formData.paymentmethod === "khalti" && (
                                        <>
                                            <img
                                                src="/images/Dikshant_khalti.jpg"
                                                alt="Khalti Payment QR"
                                                className="mx-auto"
                                            />
                                            <img
                                                src="/images/Nischal_Khalti.png"
                                                alt="Khalti Payment QR"
                                                className="mx-auto"
                                            />
                                            <img
                                                src="/images/Sanjita_Khalti.png"
                                                alt="Khalti Payment QR"
                                                className="mx-auto"
                                            />
                                        </>
                                    )}

                                    {formData.paymentmethod === "esewa" && (
                                        <>
                                            <img
                                                src="/images/Dikshant_esewa.jpg"
                                                alt="Khalti Payment QR"
                                                className="mx-auto max-h-90"
                                            />
                                            <img
                                                src="/images/Nischal_esewa.png"
                                                alt="Khalti Payment QR"
                                                className="mx-auto max-h-90"
                                            />
                                            <img
                                                src="/images/Sanjita_esewa.jpg"
                                                alt="Khalti Payment QR"
                                                className="mx-auto max-h-110"
                                            />
                                        </>
                                    )}

                                    {formData.paymentmethod === "bank" && (
                                        <img
                                            src="/images/Club_bank.png"
                                            alt="Bank Payment QR"
                                            className="h-auto"
                                        />
                                    )}
                            </div>

                            <div className="flex flex-col items-center space-x-4">
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer inline-block text-white bg-[#118811] rounded-md mt-2 py-2 px-4 hover:bg-[#116611] transition-colors duration-200 m-auto"
                                >
                                    Upload Payment Proof
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    name="image"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                    required
                                />

                                {fileName && ( 
                                        <p className="text-md font-medium text-[#5004a0] mt-2">File selected: <span className="text-[#222222]">{fileName}</span></p>
                                )}
                            </div>

                            <label className={`${labelClassName} mt-4`}>Any feedback?</label>
                            <textarea
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                placeholder="Your text here..."
                                className={`${inputClassName} min-h-20 max-h-30 resize-y`}
                            />

                            <button
                            type="submit"
                            className={`mt-0 px-6 py-2 rounded-md w-full transition-all 
                                ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-[#5004a0] hover:bg-[#3e037e] text-white"}`}
                            disabled={isSending}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
        </>
    );
}


// appscript code for this 
// Function to handle POST requests from the web form submission
// function doPost(e) {
//   try {
//     Logger.log("doPost received parameters: " + JSON.stringify(e.parameters));

//     // Call function to record data to the Google Sheet dynamically
//     record_data(e);

//     // Return a JSON success response for the client-side JavaScript (no email sent)
//     return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Data recorded successfully!" }))
//                          .setMimeType(ContentService.MimeType.JSON);

//   } catch(error) { // Catch any errors during the process
//     Logger.log("Error in doPost: " + error.toString());
//     // Return a JSON error response for the client-side JavaScript
//     return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message || "Unknown error occurred", debug: error.toString() }))
//                          .setMimeType(ContentService.MimeType.JSON);
//   }
// }


// /***********************************************************************
//  * record_data inserts the data received from the html form submission
//  * dynamically based on keys in e.parameters.
//  * e is the data received from the POST event object
//  ************************************************************************/

// function record_data(e) {
//   try {
//     Logger.log("record_data: Attempting to record data dynamically.");

//     var doc = SpreadsheetApp.getActiveSpreadsheet();
//     var sheetName = "Submissions"; // Using a clear default name for submissions
//     var sheet = doc.getSheetByName(sheetName);

//     // If the sheet doesn't exist, create it
//     if (!sheet) {
//       Logger.log("record_data: Sheet '" + sheetName + "' not found. Creating new sheet.");
//       sheet = doc.insertSheet(sheetName);
//     }
    
//     // The keys from the API call parameters are used for dynamic processing.
//     // The keys are usually the field names from the HTML form.
//     var incomingKeys = Object.keys(e.parameters);
    
//     // Define the headers based on the current sheet state
//     var headers;
//     var timestampHeader = "Timestamp";

//     // Check if the first row is empty or if the first cell (A1) is empty
//     if (sheet.getLastRow() === 0 || sheet.getRange(1, 1).getValue() === "") {
//       Logger.log("record_data: Sheet is empty, setting dynamic headers.");
      
//       // The headers will be 'Timestamp' followed by all the incoming data keys
//       headers = [timestampHeader].concat(incomingKeys.map(key => String(key).replace(/_/g, ' ')));
//       sheet.appendRow(headers);
//     } else {
//       // If headers already exist, retrieve them
//       headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
//       Logger.log("record_data: Existing headers found: " + headers.join(", "));
      
//       // CRITICAL CHECK: Ensure all incoming keys have a corresponding header.
//       // If a new field is submitted, a warning is logged, but for simplicity, 
//       // the data will be added to the end of the existing row (which might create new columns).
//       // For more robust handling, consider adding new headers here if they don't exist.
//     }

//     // --- Prepare the Data Row Dynamically ---

//     // 1. Start the row with the Timestamp
//     var rowData = [new Date()]; 

//     // 2. Iterate through the **existing headers** (starting from index 1, skipping Timestamp)
//     //    and map the incoming data to the correct column position.
//     for (var i = 1; i < headers.length; i++) {
//       var headerKey = String(headers[i]).toLowerCase().replace(/ /g, '_'); // Convert header back to a likely API key format (e.g., 'Full Name' -> 'full_name')

//       // Find the corresponding value in e.parameters.
//       // e.parameters values are always arrays, so access the first element [0].
//       // Use the original incoming key if available, otherwise try the converted key.
//       var value = '';
      
//       // Find the best match for the header in the incoming keys
//       for (var j = 0; j < incomingKeys.length; j++) {
//         var incomingKey = incomingKeys[j];
        
//         // Match 1: Exact key match
//         // Match 2: Converted header (e.g. 'Full Name') matches incoming key (e.g. 'full_name')
//         if (incomingKey === headers[i] || incomingKey.toLowerCase().replace(/_/g, ' ') === headers[i].toLowerCase()) {
//              // Handle arrays (e.g., checkboxes, multiple selections) by joining them
//              value = e.parameters[incomingKey].join(', ');
//              break;
//         } else if (incomingKey === headerKey) { // Match 3: Incoming key matches the converted header key (e.g., 'full_name' submitted, header is 'Full Name')
//              value = e.parameters[incomingKey].join(', ');
//              break;
//         }
//       }
      
//       rowData.push(value);
//     }
    
//     // Append the dynamically generated row with the data
//     sheet.appendRow(rowData);
//     Logger.log("record_data: Dynamic data successfully recorded in sheet.");

//   } catch(error) {
//     Logger.log("Error in record_data function: " + error.toString());
//     throw error;
//   }
// }

// // **(The other helper functions like formatMailBody and sanitizeInput are now unused but can be left for potential future use or safely deleted)**
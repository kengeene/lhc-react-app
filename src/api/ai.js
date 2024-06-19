import request from "@/utils/requests"

export async function fetchRecipie({ payload }) {
  return request({
    url: "https://api.openai.com/v1/chat/completions",
    method: "post",
    headers: {
      Authorization:
        "Bearer sk-my-cooking-bot-he7LyrfnQC9xkxH1oxQvT3BlbkFJdilEWDTqelHqf3gKnqQs",
    },
    data: {
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "I want you to act as a cooking assistant that comes up with recipes based on particular ingredients I have in my pantry. I will provide you with a an object with arrays of my preferences. I want you to answer only with an array containing a maximum of 3 recipes with detailed step-by-step instructions showing how to cook the meals in json format so I can process all of the data programatically. For the ingredients lets have them in an array in the following structure which the quantity, a single name of the object, and the form minced, diced, a cup of: {quantity: 1, name: 'onion', form: 'diced'}, {quantity: 2, name: 'garlic', form: 'minced'}/",
        },
        {
          role: "user",
          content: JSON.stringify(payload),
        },
      ],
    },
  });
}
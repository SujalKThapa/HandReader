import comprehend from './awsConfig';

export const analyzePII = async (text) => {
    const params = {
        Text: text, // Use 'Text' for single input
        LanguageCode: 'en' // Specify the language of the text, e.g., 'en' for English
    };

    try {
        const data = await comprehend.detectPiiEntities(params).promise();

        // Log the full response to see the structure
        console.log("Comprehend PII Detection Response:", data);

        // Check if the response contains Entities and it's an array
        if (data && data.Entities && data.Entities.length > 0) {
            const entitiesWithText = data.Entities.map(entity => ({
                ...entity, 
                Text: text.substring(entity.BeginOffset, entity.EndOffset) // Extract text using offsets
            }));

            console.log("Entities with Extracted Text:", entitiesWithText);
            return entitiesWithText;
        } else {
            console.warn("No PII entities detected.");
            return []; // Return an empty array if no entities are found
        }
    } catch (error) {
        console.error("Error analyzing PII:", error);
        throw error;
    }
};

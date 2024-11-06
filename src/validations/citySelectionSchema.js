import * as Yup from "yup";

export const citySelectionValidationSchema = Yup.object({
    startDate: Yup.date()
        .required("Start date is required")
        .typeError("Invalid date format"),
    
    endDate: Yup.date()
        .required("End date is required")
        .typeError("Invalid date format")
        .min(Yup.ref("startDate"), "End date can't be before start date"),
    
    departureCity: Yup.string()
        .required("Departure city is required")
        .min(2, "Departure city must be at least 2 characters")
        .max(50, "Departure city must be at most 50 characters"),
    
    // destinationCities: Yup.array()
    //     .of(
    //         Yup.string()
    //             .required("Destination city is required")
    //             .min(2, "Each destination city must be at least 2 characters")
    //             .max(50, "Each destination city must be at most 50 characters")
    //     )
    //     .min(1, "At least one destination city is required"),
    
    purposeOfTravel: Yup.string()
        .required("Purpose of travel is required"),
    
    travelerType: Yup.string()
        .required("Traveler type is required"),
    
    travelers: Yup.array()
        .of(
            Yup.object().shape({
                adultCount: Yup.number()
                    .required("Adult count is required")
                    .min(1, "At least one adult is required"),
                adultsAge: Yup.array()
                    .of(Yup.number().min(0, "Age cannot be negative"))
                    .required("Adults' ages are required")
                    .min(1, "At least one adult's age must be specified"),
                childCount: Yup.number()
                    .required("Child count is required")
                    .min(0, "Child count cannot be negative"),
                childrenAge: Yup.array()
                    .of(Yup.number().min(0, "Age cannot be negative"))
                    .when("childCount", (childCount, schema) =>
                        childCount > 0
                            ? schema.min(1, "Ages of children must be provided")
                            : schema.max(0, "No ages should be listed if child count is 0")
                    )
            })
        )
        .min(1, "At least one room is required"),
    
});
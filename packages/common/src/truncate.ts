export function truncateJsonBlob(obj: object, maxSerializedSize = 2048) {
  // Serialize the object to a JSON string
  let jsonString = JSON.stringify(obj)

  // Check if the serialized string exceeds the maximum size
  if (new TextEncoder().encode(jsonString).length > maxSerializedSize) {
    // If it does, create a truncated version of the object
    // This example simply takes the first property, but you can customize the truncation logic
    const firstKey = Object.keys(obj)[0]
    const truncatedObj = { [firstKey]: obj[firstKey], _truncated: true }

    // Serialize the truncated object instead
    jsonString = JSON.stringify(truncatedObj)
  }

  return jsonString
}

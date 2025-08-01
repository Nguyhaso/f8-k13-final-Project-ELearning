import {Box, Button, FileUpload, Icon} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {LuUpload} from "react-icons/lu";

export default function () {


  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [file]);

  return (
    <Box p="24px" bg="white" rounded="xl" maxHeight={'calc(100vh - 194px)'}
         overflowY={'auto'}>


      <FileUpload.Root accept={["image/*", "application/pdf"]}
                       onChange={files => setFile(files.target.files[0])}
      >
        {!file ? (
          <>
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone w="100%">
              <Icon as={LuUpload} boxSize={6} color="gray.500" />
              <FileUpload.DropzoneContent>
                <Box>Drag and drop file here</Box>
                <Box color="gray.500">.png, .jpg, .pdf up to 50MB</Box>
              </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
          </>
        ) : (
          <Box flex="1" display="flex" flexDirection="column"  w={'100%'}>
            <FileUpload.List />
            <Button onClick={() => setFile(null)} my={4}>
              Clear file
            </Button>

            {file.type.startsWith("image/") && previewUrl && (
              <Box flex="1" overflow="auto">
                <img
                  src={previewUrl}
                  alt="preview"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Box>
            )}

            {file.type === "application/pdf" && previewUrl && (
              <Box flex="1" overflow="hidden" w={'100%'}>
                <iframe
                  src={previewUrl}
                  title="PDF Preview"
                  width="100%"
                  height={'500px'}
                  style={{ border: "none" }}
                />
              </Box>
            )}

          </Box>
        )}
      </FileUpload.Root>
    </Box>
  )
}


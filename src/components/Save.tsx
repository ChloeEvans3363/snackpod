interface SaveFileProps {
  blob: Blob;
}

const saveFile = async ({ blob }: SaveFileProps) => {
  const a = document.createElement("a");
  a.download = `recording_${new Date().toISOString()}.wav`;
  a.href = URL.createObjectURL(blob);
  a.addEventListener("click", (e) => {
    setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
  });
  a.click();
};

export default saveFile;

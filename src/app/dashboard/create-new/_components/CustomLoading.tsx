import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import Image from "next/image";

function CustomLoading({ loading }: { loading: boolean }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className="flex flex-col items-center my-10 justify-center">
          <Image src={"/rocket.gif"} alt="rocket" width={100} height={100} />
          <h2>Generating your video... Do not Refresh</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;

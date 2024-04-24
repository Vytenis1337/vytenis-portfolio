import { toast } from "sonner";

export function sendEmail(data) {
  const apiEndpoint = "/api/sendEmail";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success("email sent successfully!");
    })
    .catch((err) => {
      toast.error(err);
    });
}

import axiosInstance from "@/axios";

type Body = {
  requestId: number;
  answer: boolean;
};

const answerRequest = async (body: Body) => {
  await axiosInstance.put("/api/Requests/AnswerTheRequest", body);
};

export default answerRequest;

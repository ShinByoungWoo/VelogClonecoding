import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elements/Index";
import { actionCreators as commentActions } from "../redux/modules/comment";
import moment from "moment";

const CommentList = (props) => {
  const dispatch = useDispatch();

  const post_id = props.post;
  const comments = props.comment_list[post_id];

  return (
    <React.Fragment>
      {/* {comments &&
        comments.map((p, idx) => {
          if (p.articleId._id === post_id) {
            return <CommentItem key={idx} {...p} />;
          }
        })} */}
    </React.Fragment>
  );
};
// }

export default CommentList;

// const CommentItem = (props) => {
//   const createDate = moment(props.createDate).format("YYYY/MM/DD - HH:mm:ss");
//   return (
//     <Grid is_flex>
//       <Text size="19px">{props.user_nick}</Text>
//       <Grid is_flex margin="0px 10px 0px 30px">
//         <Text size="19px" bold>
//           {props.user_comment}
//         </Text>
//         <Text color="gray">{createDate}</Text>
//       </Grid>
//     </Grid>
//   );
// };

// CommentItem.defaultProps = {
//   user_nick: "jini",
//   user_comment: "이게 되네",
//   createDate: "2022-02-04 10:00:00",
// };

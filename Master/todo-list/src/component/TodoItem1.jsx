function TodoItem1(){

  let TodoName = 'Buy milk';
  let TodoDate = '4/11/2025';
  return <>
  <div class="row">
            <div class="col-6">{TodoName}</div>
            <div class="col-4">{TodoDate}</div>
            <div class="col-2"><button type="button" class="btn btn-danger">Delet</button></div>
          </div>
          </>;
}
export default TodoItem1;
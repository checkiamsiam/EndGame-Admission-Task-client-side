import React from 'react';

const Completed = ({ completedTask }) => {
  console.log(completedTask);
  return (
    <div className='pt-20'>
      <div class="overflow-x-auto max-w-xl mx-auto">
        <table class="table w-full">
         
          <thead>
            <tr>
              <th colSpan={3} className='text-2xl'>Completed Tasks</th>
            </tr>
          </thead>
          <tbody>
         
           {completedTask.map(task =>  <tr>
              <th>*</th>
              <td>{task.user_name}</td>
              <td>Done</td>
            </tr>)}
   
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
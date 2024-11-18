import React, { useState } from 'react';

function JobPostForm() {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [jobPosts, setJobPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new job post to the jobPosts array
    const newJobPost = {
      projectName,
      description,
      amount,
    };

    setJobPosts([...jobPosts, newJobPost]);

    // Clear the form fields
    setProjectName('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="container" id="postJob">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center pb-5" id="postjob_heading">CRAFT YOUR MISSION HERE</h1>
        
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">Project Name:</label>
          <input
            className="form-control border-success-subtle"
            type="text"
            autoComplete="off"
            id="projectName"
            name="projectName"
            required
            minLength="2"
            maxLength="100"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Job Description:</label>
          <textarea
            className="form-control border-success-subtle"
            id="description"
            name="description"
            rows="4"
            cols="50"
            required
            minLength="20"
            maxLength="800"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount (Bid):</label>
          <input
            className="form-control border-success-subtle"
            type="number"
            id="amount"
            name="amount"
            required
            min="1"
            max="100000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      {/* Display job posts below the form */}
      <div className="job-posts mt-5">
        <h2>Posted Jobs</h2>
        {jobPosts.length === 0 && <p>No jobs posted yet.</p>}
        {jobPosts.map((post, index) => (
          <div key={index} className="job-post p-3 border border-secondary rounded mt-3">
            <h3>{post.projectName}</h3>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Amount:</strong> ${post.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPostForm;

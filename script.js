// تحديث القيم بجانب السلايدر
const sliders = [1, 2, 3, 4, 5, 6];
sliders.forEach(i => {
  const slider = document.getElementById(`motor${i}`);
  const label = document.getElementById(`val${i}`);
  slider.addEventListener('input', () => {
    label.textContent = slider.value;
  });
});

// Reset
function resetSliders() {
  sliders.forEach(i => {
    document.getElementById(`motor${i}`).value = 90;
    document.getElementById(`val${i}`).textContent = 90;
  });
}

// Save Pose
function savePose() {
  const data = {};
  sliders.forEach(i => {
    data[`motor${i}`] = parseInt(document.getElementById(`motor${i}`).value);
  });

  fetch('save_pose.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(() => loadTable());
}

// Load Pose Table
function loadTable() {
  fetch('load_poses.php')
    .then(res => res.text())
    .then(html => {
      document.getElementById('poseTable').innerHTML = html;
    });
}

// Run
function runPose() {
  fetch('get_run_pose.php')
    .then(res => res.json())
    .then(data => {
      sliders.forEach(i => {
        document.getElementById(`motor${i}`).value = data[`motor${i}`];
        document.getElementById(`val${i}`).textContent = data[`motor${i}`];
      });
    });
}

loadTable();

// تحميل وضعية بناءً على ID
function loadPose(id) {
  fetch(`get_pose_by_id.php?id=${id}`)
    .then(res => res.json())
    .then(data => {
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`motor${i}`).value = data[`motor${i}`];
        document.getElementById(`val${i}`).textContent = data[`motor${i}`];
      }
    });
}

// حذف وضعية
function deletePose(id) {
  if (confirm("Are you sure you want to delete this pose?")) {
    fetch("delete_pose.php", {
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `id=${id}`
    }).then(() => loadTable());
  }
}

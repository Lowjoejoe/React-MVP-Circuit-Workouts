DROP TABLE IF EXISTS workouts CASCADE;

CREATE TABLE workouts (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, 
    name varchar(255),
    description varchar(500), 
    type varchar (255), 
    equipment varchar (255), 
    reps varchar (255)
);

INSERT INTO workouts (name, description, type, equipment, reps)
VALUES

    ('bodyweight squats', 'from standing position squat down keeping heels planted and then return to standing', 'lower body', 'none', '20 reps'),
    ('push-ups', 'from high plank position keep straight back and legs and bend arms lowering body to the ground and then push arms straight', 'upper body', 'none', '20 reps'),
    ('walking lunges', 'from standing drive one leg out in front into a lung. keep posture straight and front leg at 90degrees. Drive with front leg to bring yourself back up to standing','lower body', 'none', '10 each leg'),
    ('pull-ups', 'using a bar grasp with hands facing away from you and pull body up, bringing the bar to below your chin. If needed bands can be used to assist.', 'upper body', 'none', '10 reps'),
    ('chin-ups', 'using a bar grasp with hands facing towards you and pull body up, bringing the bar to below your chin. If needed bands can be used to assist.', 'upper body', 'none', '10 reps'),
    ('plank', 'from plank position and forarms on the ground hold body in a straight line. Make sure to keep your core tight', 'full body', 'none', '30 seconds'),
    ('dips', 'using an elevated bench or box, face away from box and support weight with your arms. keeping your legs straight lower your body towards the ground until your elbows reach 90degrees and then push back up', 'upper body', 'none', '20 reps'),
    ('front to back', 'establish an imaginary line and with feet together jump back and forth over the line. land softely and keep good form', 'lower body', 'none', '20 reps'),
    ('side to sides', 'establish an imaginary line and with feet together jump side to side over the line. land softely and keep good form', 'lower body', 'none', '20 reps'),
    ('squat jumps', 'like a basic squat lower your body into a squat and then drive into a jump. land softely and reset to standing for one rep.','lower body', 'none', '20 reps'),
    ('crunches', 'laying on your back with feet planted or held at 90 degrees lift upper body up from the ground towards your knees and then return.', 'core', 'none', '20 reps'),
    ('reverse crunches', 'laying on your back and legs at 90degrees bring your butt slightly off the ground and drive your legs into the sky.','core', 'none','20reps'),
    ('KB squats', 'hold kettle bell to your chest and execute squat in good form', 'lower body', 'kettle bell', '15 reps'),
    ('box jumps', 'using a box or solid elevated surface from standing position jump on to the box landing softely and with good form and then softely jump back to the ground for one rep.','lower body', 'box', '20 reps'),
    ('KB swings', 'holding kettle bell with both hands between your legs, use your hips and arms to thrust the kettle bell up to eye level and return in a controlled swing back to between your legs', 'full body', 'kettle bell', '15 reps'),
    ('bent over rows','with knees slightly bent tilt at the hips using dumbbells or kettle bells in both hands and arms straight with a slight bend at the elbow bring weights to side of the body and then return.','upper body', 'kettle bell', '15 reps');